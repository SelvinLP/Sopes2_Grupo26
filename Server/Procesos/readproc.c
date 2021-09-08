#include <linux/init.h>
#include <linux/module.h>
#include <linux/kernel.h>
#include <linux/debugfs.h>
#include <linux/seq_file.h>
#include <linux/spinlock.h>
#include <linux/sched/signal.h>
#include <linux/sched/task.h>

/*para el archivo proc*/
#include <linux/fs.h>
#include <linux/proc_fs.h>
#include <linux/seq_file.h>
/*fin para el archivo proc*/


#include <asm/processor.h>
#include <asm/mmu_context.h>

MODULE_LICENSE("GPL");
MODULE_AUTHOR("Selvin Lisandro Aragón Pérez");
MODULE_DESCRIPTION("Modulo para obtener la ram");
MODULE_VERSION("0.01");

static int my_proc_show(struct seq_file *m, void *v){
    //Procesos
    struct task_struct *task;
    for_each_process(task){
        seq_printf(m, "{ \"id\": %d , \"name\": \"%s\" , \"status\": \"%ld\", \"fatherid\":\"0\"}",  task->pid, task->comm, task->state);
  	}
    return 0;
}

static ssize_t my_proc_write(struct file *file, const char __user *buffer, size_t count, loff_t *f_pos){
    return 0;
}

static int my_proc_open(struct inode *inode, struct file *file){
    return single_open(file, my_proc_show, NULL);
}

static struct file_operations my_fops = {
    .owner = THIS_MODULE,
    .open = my_proc_open,
    .release = single_release,
    .read = seq_read,
    .llseek = seq_lseek,
    .write = my_proc_write
};

static int __init init_p(void){
        struct proc_dir_entry *entry;
        entry = proc_create("proc_grupo26", 0777, NULL, &my_fops);
        if(!entry) {
                return -1;
        } else {
                printk(KERN_INFO "Hola mundo, somos el grupo 26 y este es el monitor de procesos \n");
        }
        return 0;
}

static void __exit exit_p(void){
        remove_proc_entry("proc_grupo26",NULL);
        printk(KERN_INFO "Sayonara mundo, somos el grupo 26 y este fue el monitor de procesos \n");
}

module_init(init_p);
module_exit(exit_p);
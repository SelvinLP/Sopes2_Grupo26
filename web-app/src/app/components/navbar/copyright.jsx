import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://github.com/PIKmanases" target="_blank">
          SOPES2 Grupo 26 - 2S 
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
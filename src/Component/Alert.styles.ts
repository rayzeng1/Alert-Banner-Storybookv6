import {makeStyles, createStyles} from '@material-ui/core/styles';

export const useAlertStyles = makeStyles(() =>
  createStyles({
    message: {
      width: 'auto !important'
    }
  })
);
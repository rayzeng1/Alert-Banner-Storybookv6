import {TypographyVariant} from '@material-ui/core';
import {AlertProps as MaterialAlertProps} from '@material-ui/lab/Alert/';
import {AlertTitleProps} from '@material-ui/lab/AlertTitle'

export interface AlertProps extends MaterialAlertProps {
    testId?: {
    containerId?: string;
    titleId?: string;
    contentId?: string;
  };
  
  title?: any;
  action?: boolean;
  decorativeIcon?: boolean;
  iconProps?: any;
  titleVariant?: TypographyVariant;
  bodyVariant?: TypographyVariant;
  componentTitleVariant?: React.ElementType;
  componentVariant?: React.ElementType;
  alertTitleProps?: AlertTitleProps;
}


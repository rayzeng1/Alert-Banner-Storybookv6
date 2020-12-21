import React, {FC} from 'react';
import {text, select, boolean} from '@storybook/addon-knobs';
import {Button} from '@material-ui/core';
import MaterialAlert from '@material-ui/lab/Alert';
import MaterialAlertTitle from '@material-ui/lab/AlertTitle';
import {Typography, Box} from '@material-ui/core';
import {WarningIcon} from './WarningIcon';
import {WhiteCheckIcon} from './WhiteCheckIcon';
import {AlertBigIcon} from './AlertBigIcon';
import CheckCircleOutlineRounded from '@material-ui/icons/CheckCircleOutlineRounded';
import {AlertProps} from './types';
import {ALERT_CONTAINER, ALERT_TITLE, ALERT_CONTENT} from './constants';
import {useAlertStyles} from './Alert.styles';
import PropTypes from 'prop-types';

const iconPropsWithDefaults = (iconProps: AlertProps['iconProps']) => ({
  'data-testid': 'alert-icon',
  ...iconProps
});

const iconMappingDefault = (decorativeIcon: AlertProps['decorativeIcon'], iconProps: AlertProps['iconProps']) => ({
  error: (
    <AlertBigIcon
      fontSize="inherit"
      titleAccess={decorativeIcon ? undefined : 'error'}
      {...iconPropsWithDefaults(iconProps)}
    />
  ),
  warning: (
    <WarningIcon
      fontSize="inherit"
      titleAccess={decorativeIcon ? undefined : 'warning'}
      {...iconPropsWithDefaults(iconProps)}
    />
  ),
  success: (
    <WhiteCheckIcon
      fontSize="inherit"
      titleAccess={decorativeIcon ? undefined : 'success'}
      aria-hidden="true"
      {...iconPropsWithDefaults(iconProps)}
    />
  ),
  info: (
    <CheckCircleOutlineRounded
      fontSize="inherit"
      titleAccess={decorativeIcon ? undefined : 'info'}
      {...iconPropsWithDefaults(iconProps)}
    />
  )
});


const defaultTestIds = {
  containerId: ALERT_CONTAINER,
  titleId: ALERT_TITLE,
  contentId: ALERT_CONTENT
};

export const Alert : FC<AlertProps> = (props) => {

  const {
    decorativeIcon = false,
    iconProps = {},
    title,
    iconMapping,
    children,
    testId,
    bodyVariant = 'body2',
    componentVariant = 'div',
    componentTitleVariant = 'div',
    alertTitleProps,
    action,
    classes,
    ...rest
  } = props;


  const defaultClasses = useAlertStyles();
  const mergedIcons = {...iconMappingDefault(decorativeIcon, iconProps), ...iconMapping};
  const mergedTestIds = {...defaultTestIds, ...testId};
  const messageClasses = action ? defaultClasses : {};
  const mergedClasses = {...messageClasses, ...classes};


  return (
    <MaterialAlert
      data-testid={mergedTestIds.containerId}
      iconMapping={mergedIcons}
      action={action}
      classes={mergedClasses}
      {...rest}
    >
      {title && (
        <MaterialAlertTitle data-testid={mergedTestIds.titleId} {...alertTitleProps}>
          <Typography component={componentVariant}>
            <Box fontWeight="fontWeightBold" mb={children ? 1 : 0}>
              {title}
            </Box>
          </Typography>
        </MaterialAlertTitle>
      )}
      {children && (
        <Typography data-testid={mergedTestIds.contentId} variant={bodyVariant} component={componentTitleVariant}>
          <Box fontWeight="fontWeightMedium">{children}</Box>
        </Typography>
      )}
    </MaterialAlert>
  );
};


export default Alert;


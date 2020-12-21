import React, {FC} from 'react';
import SvgIcon, {SvgIconProps} from '@material-ui/core/SvgIcon';
import {makeStyles, createStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      height: '20px',
      width: '20px'
    }
  })
);

export const WhiteCheckIcon: FC<SvgIconProps> = (props) => {
  const classes = useStyles();
  return (
    <SvgIcon viewBox="0 0 20 20" {...props} className={classes.root}>
      <path
        d="M19.5075773,5.36616871 C20.1641409,4.70960517 20.1641409,3.64835669 19.5075773,
      2.99179316 C18.8510138,2.33690881 17.7897653,2.33522962 17.1332018,2.99179316 L6.43004072,
      13.6966334 L2.86847739,10.1317117 C2.21023467,9.47514818 1.14898619,9.47514818 0.492422652,
      10.1317117 C-0.164140884,10.7882753 -0.164140884,11.8528821 0.492422652,12.5077665 L5.24285294,
      17.2581968 C5.89941648,17.9130811 6.96066496,17.9130811 7.6172285,17.2581968 C7.62058688,
      17.2548384 7.62058688,17.25148 7.62394526,17.2481216 C7.62730364,17.2447632 7.63066202,
      17.2447632 7.6340204,17.2414048 L19.5075773,5.36616871 Z"
      />
    </SvgIcon>
  );
};

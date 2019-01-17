import React from 'react';

// MaterialUI Components
import { Card, CardHeader, Avatar } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

// Icons
import { User, Package, Home, AlertOctagon } from 'react-feather';
import styles from './styles';

const variantIcon = {
  box: Package,
  user: User,
  home: Home,
  alert: AlertOctagon,
};

const MiniCard = props => {
  const {
    classes,
    avatar = 'box',
    title = 'Shrimp and Chorizo Paella',
    description = 'September 14, 2016',
    onClick,
  } = props;

  const Icon = variantIcon[avatar];
  return (
    <Card className={classes.card} onClick={onClick}>
      <CardHeader
        classes={{ root: classes.cardHeader }}
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            <Icon />
          </Avatar>
        }
        title={title}
        subheader={description}
      />
    </Card>
  );
};

export default withStyles(styles)(MiniCard);

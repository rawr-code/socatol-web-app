import React, { PureComponent } from 'react';

// Material UI
import { List, Paper, withStyles } from '@material-ui/core';

// Components
import Loading from './Loading';
import ListHeader from './ListHeader';
import ListItems from './ListItems';
import ListEmpty from './ListEmpty';
import ListButtons from './ListButtons';
import AsideInfo from './AsideInfo';

import styles from './styles';

class TableBoard extends PureComponent {
	render() {
		const { classes, data, selectedItem, isLoading } = this.props;
		const { icon, labels, children } = this.props;

		return (
			<Paper className={classes.root}>
				<section className={classes.sideListRoot}>
					<ListHeader classes={classes} labels={labels.listHeader} />
					<List className={classes.list} disablePadding>
						{isLoading ? (
							<Loading classes={classes} icon={icon} />
						) : data ? (
							<ListItems classes={classes} />
						) : (
							<ListEmpty
								classes={classes}
								labels={labels.listEmpty}
								icon={icon}
							/>
						)}
					</List>
					<ListButtons classes={classes} labels={labels.listButtons} />
				</section>
				{selectedItem ? (
					children
				) : (
					<AsideInfo classes={classes} labels={labels.asideInfo} />
				)}
			</Paper>
		);
	}
}

export default withStyles(styles)(TableBoard);

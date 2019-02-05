const styles = theme => ({
	root: {
		display: 'flex'
	},
	sectionContainer: {
		width: '100%',
		borderLeft: '1px solid rgba(0,0,0,0.12)',
		position: 'relative'
	},
	empty: {
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		borderLeft: '1px solid rgba(0,0,0,0.12)'
	},
	loading: {
		width: '100%',
		height: 700,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	container: {
		padding: 24
	},
	fab: {
		position: 'absolute',
		right: 0,
		top: 75,
		margin: 24
	},
	header: {
		padding: 24
	},
	tabs: {
		borderBottom: '1px solid rgba(0,0,0,0.12)'
	}
});

export default styles;

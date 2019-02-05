const styles = theme => ({
	root: {
		width: '100%',
		height: 700,
		display: 'flex'
	},
	sideListRoot: {
		width: '100%',
		maxWidth: 300,
		borderRight: '1px solid rgba(0,0,0,0.12)'
	},
	addBotton: {
		margin: 0,
		padding: 20,
		borderRadius: 0,
		width: '100%',
		boxShadow: 'none',
		borderBottomLeftRadius: 8
	},
	avatar: {
		color: theme.palette.primary.main,
		backgroundColor: 'transparent'
	},
	infoContainer: {
		height: '100%',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	infoEmpty: {
		fontFamily: 'Google Sans',
		fontSize: 20,
		color: theme.palette.primary.main
	},
	infoEmptyIcon: {
		strokeWidth: 1,
		marginBottom: 8,
		color: theme.palette.primary.main
	},
	infoTitle: {
		fontFamily: 'Google Sans',
		fontSize: 24,
		color: theme.palette.primary.main
	},
	infoSubtitle: {
		fontFamily: 'Google Sans',
		fontSize: 16,
		color: theme.palette.text.secondary
	},
	list: {
		height: 'calc(100% - 64px - 72px)',
		borderTop: '1px solid rgba(0,0,0,0.12)',
		overflowY: 'auto'
	},
	listItem: {
		cursor: 'pointer'
	},
	listItemText: {
		wordWrap: 'break-word'
	},
	li: {
		height: 8
	},
	loadingIcon: {
		strokeWidth: 1,
		color: theme.palette.primary.main,
		position: 'absolute',
		top: 18,
		left: 18
	},
	loadingIconContainer: {
		position: 'relative'
	},
	noData: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	},
	searchBox: {
		padding: 8,
		display: 'flex',
		flexDirection: 'column'
	},
	searchBoxTextField: {
		marginLeft: 20,
		paddingRight: 20,
		marginBottom: 8,
		width: 'calc(100% - 20px)'
	},
	detailsRoot: {
		width: '100%',
		position: 'relative'
	},
	detailsEmpty: {
		height: '100%',
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
		bottom: 0,
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

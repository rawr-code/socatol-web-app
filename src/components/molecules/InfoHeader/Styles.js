const styles = theme => ({
  root: {
    padding: "18px 0 24px 32px",
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    justifyContent: "space-between"
  },
  after: {
    backgroundColor: "#e8e8e8",
    position: "absolute",
    top: 8,
    right: 0,
    width: 1,
    height: 40
  },
  container: {
    display: "flex",
    alignItems: "center"
  },
  description: {
    color: "rgba(0,0,0,.45)"
  },
  img: {
    width: 72,
    height: 72
  },
  item: {
    padding: "0 32px",
    textAlign: "right",
    position: "relative"
  },
  itemTitle: {
    color: "rgba(0,0,0,.45)",
    fontSize: 14,
    marginBottom: 4
  },
  number: {
    fontSize: "1.875rem"
  },
  title: {
    marginBottom: 6
  },
  titleContainer: {
    marginLeft: 24
  }
});

export default styles;

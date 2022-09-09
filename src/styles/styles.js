import colors from "./colors";

const styles = {
  container: {
    flex: 1,
    backgroundColor: colors.branco
  },
  containerHeader: {
    backgroundColor: colors.azulEscuro,
    borderBottomEndRadius: 16,
    borderBottomStartRadius: 16,
    flex: 1,
    justifyContent: "center",
  },
  containerLista:{
    flex: 3,
    paddingVertical: 24
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    color: colors.azulClaro,
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold"
  },
  image: {
    alignSelf: "center",
    resizeMode: "cover",
    height: 80,
    width: "80%",
    marginTop: 16
  }
}

export default styles;
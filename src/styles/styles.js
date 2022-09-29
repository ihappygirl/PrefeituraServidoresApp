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
  },
  /* Estilização para FlatLists */
  marginLista: { marginVertical: 16, flex: 1 },
  buttonContainer: { marginHorizontal: 16, marginVertical: 8},
  item: {
    height: 60,
    backgroundColor: colors.azulClaro,
    borderRadius: 10,
    justifyContent: "center"
  },
  buttonText: {
    fontSize: 17,
    marginHorizontal: 16, marginVertical: 6,
    fontWeight: "bold",
    color: colors.branco,
  },
  hr:{
    borderBottomColor: colors.cinza, borderBottomWidth: 0.5, margin: 16
  }
}

export default styles;
//This is a Starwars component!
const Container = styled.div`
	height: 90vh;
	width: 50vw;
	margin: 25px auto;
	overflow: auto;
	background-color: rgba(0,0,0,0.30)
`;

const StarWars = () => {

	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		Axios.get('https://swapi.co/api/people/')
		.then(res => {
			setCharacters(res.data.results);			
		})
		.catch(err => console.log('Get request failed', err))
	}, [])

	return (
		<Container>
			{characters.map((data, index) => (
	            <Card key = {index}
                name = {data.name}
                height = {data.height}
                birthDate = {data.birth_year}
                gender = {data.gender}
                species = {data.species}
                films = {data.films.length}/>
	        ))}
	    </Container>
	)

}

export default StarWars; 

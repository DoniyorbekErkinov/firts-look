import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {!pets.length ? (
        <h1>No Pets</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            key={pet.id}
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={pet.city}
            id={pet.id}
          />
        ))
      )}
    </div>
  );
};
export default Results;

import Picture from "/images.png";

type CardsProps = {
  name: string;
  breed_group: string;
  life_span: string;
  temperament: string;
  image?: string;
};

export const Card = ({
  name,
  breed_group,
  life_span,
  temperament,
  image,
}: CardsProps) => {
  return (
    <div className="cardContent">
      <img className="dogPicture" src={image || Picture} alt={name} />
      <h3>
        <i>{name}</i>
      </h3>
      <p>
        <span className="title">Breed:</span> <i>{breed_group}</i>
      </p>
      <p>
        <span className="title">Life span:</span> <i>{life_span}</i>
      </p>
      <p>
        <span className="title">Temperament:</span> <i>{temperament}</i>
      </p>
    </div>
  );
};

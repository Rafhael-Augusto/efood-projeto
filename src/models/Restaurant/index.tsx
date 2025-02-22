class RestaurantModel {
  title: string;
  description: string;
  image: string;
  rating: number;
  infos: string[];
  id: number;
  path: string;

  constructor(
    title: string,
    description: string,
    image: string,
    rating: number,
    infos: string[],
    id: number,
    path: string
  ) {
    this.title = title;
    this.description = description;
    this.image = image;
    this.rating = rating;
    this.infos = infos;
    this.id = id;
    this.path = path;
  }
}

export default RestaurantModel;

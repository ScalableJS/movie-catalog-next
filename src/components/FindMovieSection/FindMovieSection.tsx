'use client';
import SearchItem from '../SearchItem';
import ToggleSwitch from '../ToggleSwitch';
import Size from '../../types/Size';

interface FindMovieSectionProps {
  searchValue: string;
  searchBy: string;
  size: Size;
  onUpdateFindMovieSection: (value: string) => void;
  searchSubmit: (value: string) => void;
}

const handlerSearchSubmit = (value: string) => {
  console.log(value);
};
export default function FindMovieSection({
  searchValue = '',
  searchBy = 'title',
  size = Size.medium,
}): JSX.Element {
  return (
    <section className="net-find-your-movie">
      <h2>FIND YOUR MOVIE</h2>
      <SearchItem
        primary={true}
        label="SEARCH"
        size={Size.large}
        searchValue={searchValue}
        onSubmit={handlerSearchSubmit}
      />
      <br />
      <ToggleSwitch
        primary={true}
        label="SEARCH BY"
        labelA="TITLE"
        labelB="GENRE"
      />
    </section>
  );
}

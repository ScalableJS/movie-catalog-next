import ToggleSwitch from '@/components/ToggleSwitch';
import FindMovieSection from '@/components/FindMovieSection/FindMovieSection';
import RootLayout from '@/layout/RootLayout';
import './HomePage.scss';

export default function HomePage(): JSX.Element {
  return (
    <RootLayout>
      <FindMovieSection searchValue="searchValue" searchBy="searchBy" />
      <div className="net-header-result">
        <div className="net-movie-found"> movie found</div>
        <div className="net-sort-by">
          <ToggleSwitch
            label="SORT BY"
            label-a="RELEASE DATE"
            label-b="RATING"
          />
        </div>
      </div>
    </RootLayout>
  );
}

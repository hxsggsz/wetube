import Logo from './logo';
import Link from "next/link";
import { StyledMenu } from '.'
import { useContext } from 'react';
import { SearchContext } from '../../pages';
import { Search } from '../search/search';
import ThemeSwitch from '../themeSwitch/themeSwitch';
   
export const Menu: React.FC = () => {
  const { valorDoFiltro, setValorDoFiltro }: any = useContext(SearchContext)
  return (
    <StyledMenu> 
      <div>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
      <Search value={valorDoFiltro} onChange={(e) => setValorDoFiltro(e.target.value)} />
      <ThemeSwitch />
    </StyledMenu>
  );
}
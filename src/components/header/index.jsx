
import './style.css';

export function Header({children}) {
  return (
    <header className='header'>
      <div className="conteiner header__wrapper">
       {children}
      </div>
    </header>
  );
}


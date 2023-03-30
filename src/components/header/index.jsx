
import cn from 'classnames'
import { useContext } from 'react';
import { UserContext } from '../../contexts/current-user-context';
import { Button } from '../button';
import s from "./styles.module.css";

export function Header({ children }) {
 const{ currentUser,  onUpdateUser} =useContext(UserContext);
 console.log(currentUser)
  const handleClickButtonEdit = () => {
    onUpdateUser({ name: 'Алла Мальнева', about: 'Писатель' })
  }

  return (
    <header className={s.header}>
      <div className={cn('container', s.wrapper)}>
        {children}
        <span className={s.login}>{currentUser?.name}</span>
        <span className={s.email}>{currentUser?.email}</span>
        {/*<Button action={handleClickButtonEdit}>
          Изменить
  </Button>*/}
      </div>

    </header>
  );
}



import cn from 'classnames'
import { Button } from '../button';
import s from "./styles.module.css";

export function Header({ children, user, onUpdateUser }) {

  {/*const handleClickButtonEdit = () => {
    onUpdateUser({ name: 'Алла Мальнева', about: 'Писатель' })
  }*/}

  return (
    <header className={s.header}>
      <div className={cn('container', s.wrapper)}>
        {children}
        <span className={s.login}>{user?.name}</span>
        <span className={s.email}>{user?.email}</span>
        {/*<Button action={handleClickButtonEdit}>
          Изменить
  </Button>*/}
      </div>

    </header>
  );
}


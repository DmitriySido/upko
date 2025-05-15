import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        <li className="breadcrumb-item">
          <Link className='breadcrumb-link' to="/">Home</Link>
        </li>
        <li className="breadcrumb-item">
          <Link className='breadcrumb-link' to="/products">All Products</Link>
        </li>

        {pathnames.map((value, index) => {
          // Пропускаем сегмент 'product'
          if (value.toLowerCase() === 'product') return null;

          const path = `/${pathnames.slice(0, index + 1).join('/')}`;

          // Заменяем только дефисы на пробелы, оставляя другие символы
          let formattedValue = value.replace(/-/g, ' ');

          // Убираем цифры в конце строки, если они есть
          formattedValue = formattedValue.replace(/\d+$/, '').trim();

          return (
            <li key={path} className="breadcrumb-item">
              <p className='breadcrumb-path'>{formattedValue}</p>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
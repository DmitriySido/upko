import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { Range, getTrackBackground } from "react-range";
import { closeFilter } from "../../store/wishlistSlice";
import './Filter.css';
import { applyFilters, setPriceRange } from "../../store/filtersSlice";

export const Filter: React.FC = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.wishlist);

  const STEP = 1;
  const MIN = 0.00;
  const MAX = 2379;

  const [values, setValues] = useState<[number, number]>([0, 2379]);

  const formatCurrency = (num: number) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(num);




  const handleFilterApply = () => {
    dispatch(setPriceRange(values));  
    dispatch(applyFilters());         // говорим, что фильтр применён
    dispatch(closeFilter());
  };

  if (!isOpen) return null;

  return (
    <div className="filter">
      <div className="filter__overlay" onClick={() => dispatch(closeFilter())} />
      <div className="filter__content">
        <div className="filter__header">
          <h2>Filter</h2>
          <button className="filter__close" onClick={() => dispatch(closeFilter())}>×</button>
        </div>

        <div className="filter-inner">
          <div className="filter-price-input-wrapper">
            <h2 className="filter-suptitle">Availability</h2>

          <label className="filter-chckbox-label" htmlFor="in-stock">
            <input className="filter-checkbox" type="checkbox" id="in-stock" disabled/>
            In Stock (86)
          </label>

          <label className="filter-chckbox-label last" htmlFor="out-of-stock">
            <input className="filter-checkbox" type="checkbox" id="out-of-stock" disabled/>
            Out Of Stock (8)
          </label>


            <h2 className="filter-suptitle">Price</h2>

            <div className="filter-range-wrapper">
              <Range
                values={values}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(values) => setValues(values as [number, number])}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    style={{
                      ...props.style,
                      height: '2px',
                      width: '100%',
                      background: getTrackBackground({
                        values,
                        colors: ['#ccc', '#ab966f', '#ccc'],
                        min: MIN,
                        max: MAX
                      }),
                      borderRadius: '4px',
                      margin: '20px 0'
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => {
                  const { key, ...restProps } = props;
                  return (
                    <div
                      key={key}
                      {...restProps}
                      style={{
                        ...props.style,
                        height: '15px',
                        width: '4px',
                        backgroundColor: '#ab966f',
                        borderRadius: '0%',
                      }}
                    />
                  );
                }}
              />

              <p className="filter-price">
                <span>Price:</span> {formatCurrency(values[0])} <span>—</span> {formatCurrency(values[1])}
              </p>

              <button className="filter-button-search" onClick={() => handleFilterApply()}>Filter</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
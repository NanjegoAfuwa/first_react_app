import React from "react";
import { Cars } from "./cars";

export function Garage() {
  const cars = [{ id: 1, brand: 'Ford' }, { id: 2, brand: 'BMW' }, { id: 3, brand: 'Audi' }];
  return (
    <>
      <h1>Who lives in my garage?</h1>
      <ul>
        {cars.map((car) => <Cars key={car.id} brand={car.brand} />)}
      </ul>
    </>
  ); }




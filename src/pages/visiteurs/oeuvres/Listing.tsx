import React, { useEffect, useState } from 'react';
import {NavLink, useParams} from "react-router-dom"
import H1visiteur from '../../../components/h1visiteur/H1visiteur';
import OneWorks from '../../../components/oneWork/OneWorks';

const Listing: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  interface Oeuvres {
    idWorks: number; // Ajout d'un ID pour la clé unique
    name: string;
    isCreatedAt: string;
    artiste: string;
    pictures:string;
  }

  // Déclaration de l'état pour stocker les oeuvres
  const [oeuvres, setOeuvres] = useState<Oeuvres[]>([]);

  // Fonction asynchrone pour récupérer la liste des oeuvres
  const listingOeuvre = async () => {
    try {
      const response = await fetch('http://localhost:8889/api/oeuvres/listing', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idCategories: id }),
      });
      if (response.ok) {
        const data = await response.json();
        setOeuvres(data); 
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    listingOeuvre();
  }, []);

  return (
    
    <main>
      <H1visiteur 
        containerParti1="w-full flex justify-start   ms-5 " 
        containerParti2="flex w-9/12  justify-start ms-14 "  
        classNameH1 ="h-36"
        part1='LES'  
        part2="PEINTURES"
        rowBottom="rowBottom"
      />
      <article className='flex flex-row justify-around pb-20 flex-wrap'>
        { oeuvres.length>0 && oeuvres.map((oeuvre) => {
          const year = new Date(oeuvre.isCreatedAt).getFullYear(); // Récupérer l'année
          return (
            <NavLink key={oeuvre.idWorks}  to={`/oeuvres/description/${oeuvre.idWorks}`}>
              <OneWorks
                key={oeuvre.idWorks} 
                idWorks={oeuvre.idWorks}
                name={oeuvre.name}
                isCreatedAt={year.toString()} // Passer uniquement l'année
                artist={oeuvre.artiste}
                pictures={oeuvre.pictures}
                classNamePictures="w-32 h-36 mt-2"
                classNameContainer="backGround w-36 h-60 flex  flex-col items-center mt-10 "
                classNameName="on-works m-2"
              />
            </NavLink>
          );
        })}
      </article>
      
    </main>

  );
};

export default Listing;

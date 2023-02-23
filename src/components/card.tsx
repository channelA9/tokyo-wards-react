import React from 'react';

const Card = (props: {
        ward: string, 
        japanese_name: string;
        population: number;
        aref: string;
    }) => {

    return (
        <li className='w-56 transition-all delay-10 bg-white hover:bg-slate-50 hover:scale-110 shadow-lg m-4 rounded-lg overflow-hidden group'>
                <div className='flex place-items-center p-4 my-2 '>
                    <img src={'src/assets/icons/' + props.ward + '.svg'} alt={props.ward + "'s logo."} className=' h-8 w-8 m-auto flex-none'/>
                    <div className='m-auto'>
                        <h1 className='text-2xl font-black m-auto flex-grow'>{props.ward}</h1>
                        <h5 className='text-xs'>WARD</h5>
                    </div>
                </div>
                <div className='flex text-center place-items-center divide-x-2 p-4   bg-slate-200'>
                    <h2 className='text-lg font-bold w-1/2'>{props.japanese_name}</h2>
                    <h2 className='text-sm w-1/2' >POP: {props.population.toLocaleString('en-US')}</h2>
                </div>
                <div>
                    <img src={'src/assets/images/' + props.ward + '.webp'} alt={'An image of ' + props.ward + ' ward.'} className=' h-56 w-56 m-auto contrast-150 object-cover bg-slate-200'/>
                </div>
                <div className='flex place-content-evenly place-items-center  my-4 '>
                    <a href={props.aref} className='text-sm text-black p-2 rounded-md hover:text-white w-32 bg-slate-200 hover:bg-blue-900 transition-all'>Visit<br/><b className='text-md'>{props.ward}</b></a>
                </div>
        </li>
    );
}

export default Card;

/// '../../assets/images/' + props.ward + '.webp'} alt={'An image of ' + props.ward + ' ward.'
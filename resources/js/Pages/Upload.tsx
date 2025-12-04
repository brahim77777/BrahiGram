import {useState} from 'react';

export default function Upload(){

const [src , setSrc] = useState('');
let sayhi = (e: any) => {
	let file:any = e.target.files[0];
	let tempURL:any = URL.createObjectURL( file);
	setSrc( tempURL );

	// laravel-specific section
		// 2 steps !!
	// 1. create a FormData object
	let fd: FormData = new FormData();
	fd.append('file', file);
	// 2. append the file to that opbject !
		// DONE!!
}

return (
<>
	<input type="file" onChange={sayhi} multiple/>
	<button >Upload</button>
	<img src={src} alt="image_not_yet_uploaded" />
</>

);

}

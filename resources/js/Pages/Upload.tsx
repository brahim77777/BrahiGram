import {useState} from 'react';
import {useForm} from '@inertiajs/react';


export default function Upload(){

const {data, setData, post,  progress} = useForm({
	tempURL:'',
	file:''
});

const [src , setSrc] = useState('');

let sendData = (e: any)=>{

	e.preventDefault();
	post('/upload');

}

let sayhi = (file: any) => {
	let tempURL:string = URL.createObjectURL(file);
	setSrc( tempURL );
}

return (
<>
	<form onSubmit={sendData}>
		<input type="text" onChange={ (e)=> {setData('tempURL',e.target.value);} } value={data.tempURL??""} />
		<input type="file" onChange={(e)=>{setData('file', e.target.files);sayhi(e.target.files[0]);}} multiple/>
		<button >Upload</button>
		<img src={src} alt="image_not_yet_uploaded" />
	</form>
</>

);

}

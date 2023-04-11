import * as firebase from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";

import {
	getStorage,
	ref as refStorage,
	uploadBytes,
	getDownloadURL,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-storage.js";

import {
	getAuth,
	onAuthStateChanged,
	sendPasswordResetEmail,
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";

import { 
	getDatabase, 
	ref, 
	get,
	child,
	set,
	orderByChild,
	onValue,
	query,
	equalTo,
	update
} from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";

const firebaseConfig = {
	apiKey: "AIzaSyDeeqdP5trIFnXVirZL1vEcFA6X6mil5Jw",
	authDomain: "qrcodejg.firebaseapp.com",
	databaseURL: "https://qrcodejg-default-rtdb.firebaseio.com",
	projectId: "qrcodejg",
	storageBucket: "qrcodejg.appspot.com",
	messagingSenderId: "583377091478",
	appId: "1:583377091478:web:c3ec5d80ae561f76bdbbb7",
};

const app = firebase.initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = refStorage(storage);
const auth = getAuth(app);
const db = getDatabase(app, firebaseConfig.databaseURL);
const dbref = ref(db);




function FindData(code, db) {
	const data = get(child(dbref, `${db}/${code.toLowerCase().trim()}`))
		.then((snapshot) => {
			if (snapshot.exists()) {

				return snapshot.val();
			} else {
				alert("Código não encontrado!");
			}
		})

		.catch((error) => {
			alert(error);
		});

		
		return data;
}

function FindDataByType(code, database, setData) {
	const data = query(ref(db, `${database}`), orderByChild('Tipo'), equalTo(code.toLowerCase()));	

	onValue(data, (Result) => {
		setData(Result.val());
		
	})

}


function SetData(Item, dadosDB,) {
	set(child(dbref, `Brindes/${Item.toLowerCase()}`),
		dadosDB,
	)
}
function SetDataAtt(Item, calc) {
	update(child(dbref, `Brindes/${Item.toLowerCase()}`),{
		Quantidade: calc,
	}
	)
}

function addHistoryData(Lista, tipo, idAleatorio){
	set(child(dbref, `HistoricoBrindes/${tipo.toLowerCase()}-${idAleatorio}`),{
		
		...Lista,

	})
}

export {
	auth,
	dbref,
	FindData,
	onAuthStateChanged,
	getStorage,
	refStorage,
	storage,
	storageRef,
	uploadBytes,
	getDownloadURL,
	SetData,
	sendPasswordResetEmail,
	FindDataByType,
	addHistoryData,
	orderByChild,
	onValue,
	SetDataAtt
}



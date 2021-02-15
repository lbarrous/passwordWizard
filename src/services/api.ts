const PRUEBA_KO = 'pruebaKO123';
const PRUEBA_OK = 'pruebaOK123';

const RESPONSE_OK = {status: 200};
const RESPONSE_KO = {status: 401};

export const STATUS_OK = 200;
export const STATUS_KO = 401;

const submitForm = (pass: any, repass: any, optionalQuestion: any) =>
	new Promise((resolve, reject) =>
		setTimeout(() =>
			pass !== PRUEBA_KO
			? resolve(RESPONSE_OK)
			: reject(RESPONSE_KO)
		, 3000)
)

export { submitForm, PRUEBA_KO, PRUEBA_OK };


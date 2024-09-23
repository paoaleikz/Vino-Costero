interface edad {
    descripcion: string;
    edadMeses: number;
  }

export const edadesData:edad[]= [
    {
        edadMeses:1,
        descripcion:"Recién nacido"
    },
    {
        edadMeses:2,
        descripcion:"2 Meses"
    },
    {
        edadMeses:3,
        descripcion:"4 Meses"
    }
]

interface vacuna {
    nombre: string;
    descripcion: string;
    dosis: any[];
    prevenciones:any[];
  }

export const  vacunasData : vacuna[]=[
    {
        nombre:"BCG",
        descripcion :"",
        prevenciones:[
            {
                descripcion:"Previene la tuberculesis en sus formas más graves"
            }
        ],
        dosis:[
            {
                "numeroDosis":1,
                "descripcion":"Dosis única",
                "edad": 1
            },
        ]
    },
    {
        nombre:"Hepatits B",
        descripcion :"",
        prevenciones:[
            {
                descripcion:"Previene la transmisión de la hepatitis B de madre a hijo en el embarazo"
            },
            {
                descripcion:"Protege contra la infección aguda, crónica y complicaciones por hepatitis B"
            }
        ],
        dosis:[
            {
                "numeroDosis":1,
                "descripcion":"Dosis única",
                "edad": 1
            }
        ]
    },
    {
        nombre:"SPR",
        descripcion :"Previene 3 enfermedades",
        prevenciones:[
            {
                descripcion:"Sarampión"
            },
            {
                descripcion:"Paperas"
            },
            {
                descripcion:"Rubéola"
            }
        ],
        dosis:[
            {
                "numeroDosis":1,
                "descripcion":"1ra. Dosis",
                "edad": 2
            },
            {
                "numeroDosis":2,
                "descripcion":"2da. Dosis",
                "edad": 3
            }
        ]
    }
  ]
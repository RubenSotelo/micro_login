import { Injectable } from '@nestjs/common';
import { Producto } from './dto/producto.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ProductoService {
    constructor(
        private services: ConfigService
    ){
        console.log(this.services.get('config.database.host'));
        console.log(this.services.get('config.database.port'));
    }

    productoAll(){

    }

    getProdutoId(id): Producto {

        return null
    }

    creatProducto(producto: Producto){
        return producto;
    }

    delateProducto(id): Producto {
        // const indexOfObject = this.tasks.findIndex((object) => {
        //     return object.id === id;
        //   });
        //   console.log(indexOfObject);
        // if (indexOfObject !== -1) {
        //     this.tasks.splice(indexOfObject, 1);
        // } 
        // return this.taskSelec;
        return null
    }


}

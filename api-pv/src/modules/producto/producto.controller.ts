import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductoService } from './producto.service';
import { ProductoDto } from './dto/producto.dto';
import { Producto } from './dto/producto.interface';

@Controller('producto')
export class ProductoController {
    constructor(private services: ProductoService) {}

    @Get('get')
    async taskAll() /*Promise<Producto[]>*/{
        this.services.productoAll();
        return "Productos"
    }

    @Get('get/:id')
    async taskId(@Param() params: any) /*Promise<Producto>*/{
        this.services.getProdutoId(params.id);
        return "Producto"
    }

    @Post('post')
    async createTask(@Body() producto: ProductoDto) {
        return this.services.creatProducto(producto);
    }

    @Delete('delete/:id')
    async deleteTask(@Param() params: any) {
        /*this.taskServices.getTaskIdDelete(params.id)*/
        return {"mensaje": "Task Eliminado"};
    }
}

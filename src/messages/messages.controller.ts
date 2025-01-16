import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { createMessageDto } from './dtos/create.message.dto';

@Controller('messages')
export class MessagesController {
    @Get()
    listMessages() {
    }

    @Post()
    createMessages(@Body() body : createMessageDto)  {
        console.log(body , 'body')
    }
    @Get("/:id")
    oetMessage (@Param ('id') id: number) {
        console.log(id , 'id')
    }
}

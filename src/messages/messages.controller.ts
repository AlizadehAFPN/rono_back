import { Body, Controller, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { createMessageDto } from './dtos/create.message.dto';
import { MessagesServices } from './messages.services';

@Controller('messages')
export class MessagesController {
    constructor (public messagesServices : MessagesServices ) {}

    @Get()
    listMessages() {
        return this.messagesServices.findAll()
    }

    @Post()
    createMessages(@Body() body : createMessageDto)  {
        return this.messagesServices.create(body?.content)
    }
    @Get("/:id")
    async oetMessage (@Param ('id') id: string) {
        const message = await this.messagesServices.findOne(id)

        if(!message){
            throw new NotFoundException('Message Not Found')
        }
        return message
    }
}

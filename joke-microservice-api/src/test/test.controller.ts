import { Controller, Get } from '@nestjs/common';
import { TestService } from './test.service';

@Controller('test')
export class TestController {
    constructor(private readonly testService: TestService) {}

    @Get()
    async getMessageHandler(): Promise<string> {
        const retValue = this.testService.handleRequestResponseMessage()
        console.log('retValue:' + retValue)
        return retValue
    }
}

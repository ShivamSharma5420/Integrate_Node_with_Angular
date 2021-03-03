import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'customPipe'
})
export class CustomPipe implements PipeTransform {
    transform(value: any, x: any) {
        if (value.length > x)
            return value.substr(0, x) + '...';

        return value;
    }

}

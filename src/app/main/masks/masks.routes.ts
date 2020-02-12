import { Routes } from '@angular/router';

import { CEP } from './cep/cep-routing.module';
import { CNPJ } from './cnpj/cnpj-routing.module';
import { CPF } from './cpf/cpf-routing.module';
import { CURRENCY } from './currency/currency-routing.module';
import { CREDIT_CARD } from './credit-card/credit-card-routing.module';
import { DATE } from './date/date-routing.module';
import { FLOAT } from './float/float-routing.module';
import { INTEGER } from './integer/integer-routing.module';
import { PHONE } from './phone/phone-routing.module';
import { TIME } from './time/time-routing.module';

export const MASKS_ROUTES: Routes = [
    ...CEP,
    ...CNPJ,
    ...CPF,
    ...CREDIT_CARD,
    ...DATE,
    ...CURRENCY,
    ...FLOAT,
    ...INTEGER,
    ...PHONE,
    ...TIME
];

package com.github.gabrielffguimaraes.util;

import lombok.NoArgsConstructor;
import lombok.experimental.UtilityClass;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;

import java.math.BigDecimal;
@Component
public class BigDecimalConverter {
    public BigDecimal converter(String n){
        if(n == null){
            return null;
        }
        n = n.replace(".","").replace(",",".");
        return new BigDecimal(n);
    }
}

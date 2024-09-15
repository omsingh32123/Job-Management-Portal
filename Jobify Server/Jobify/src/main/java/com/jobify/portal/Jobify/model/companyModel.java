package com.jobify.portal.Jobify.model;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Embeddable
@Getter
@Setter
public class companyModel {

    private String companyName;
    private String companyDescription;
    private String companyContactEmail;
    private String companyContactPhone;

}

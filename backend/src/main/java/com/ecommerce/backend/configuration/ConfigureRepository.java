package com.ecommerce.backend.configuration;

import com.ecommerce.backend.model.Category;
import com.ecommerce.backend.model.Product;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;

@Configuration
public class ConfigureRepository implements RepositoryRestConfigurer {

  @Override
  public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
    HttpMethod[] unsupportedMethod = {HttpMethod.GET, HttpMethod.DELETE, HttpMethod.POST, HttpMethod.PUT};
    disableHttpMethod(Product.class, config, unsupportedMethod);
    disableHttpMethod(Category.class, config, unsupportedMethod);
  }

  private void disableHttpMethod(Class clazz, RepositoryRestConfiguration config, HttpMethod[] unsupportedMethod) {
    config.getExposureConfiguration()
            .forDomainType(clazz)
            .withItemExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedMethod))
            .withCollectionExposure((metadata, httpMethods) -> httpMethods.disable(unsupportedMethod));
  }
}

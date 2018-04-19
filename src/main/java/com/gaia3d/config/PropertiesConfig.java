package com.gaia3d.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

import lombok.Data;

@Data
@Configuration
@PropertySource("classpath:mago3d.properties")
@ConfigurationProperties(prefix = "mago3d")
public class PropertiesConfig {

	private String osType;
	private String serverIp;
	private String serverInfo;
	private String restAuthKey;
	
	private String licenseFile;
	private String licenseFileChecker;
	
	private String excelUserUploadDir;
	private String excelDataUploadDir;
	private String excelSampleUploadDir;
	
	private String issueDataUploadDir;
}

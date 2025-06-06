---
title: AEM Events powered by Add-On Module on AEM On-Premise
---

# AEM Events powered by Add-On Module on AEM On-Premise

To install and configure the Adobe I/O Events add-on module on AEM (version 6.5.x and above):

1. [Set up your workspace in Adobe Developer Console](aem-console-setup.md)
2. Configure the [AEM Link Externalizer](aem-on-premise-link-externalizer.md)
3. Download the latest version of the add-on module `aio-aem-events-<version>-aem65.zip`
   * from [github aio-lib-java releases](https://github.com/adobe/aio-lib-java/releases)
   * or from [maven-central](https://repo1.maven.org/maven2/com/adobe/aio/aem/aio-aem-events/)
     (download the `aem65` classifier `maven` artifact, the default `maven` artifact targets AEM as a cloud service)
4. [Install `aio-aem-event` add-on module](aem-on-premise-package-install.md)
5. [Configure it](aem-workspace-setup.md)
6. Trigger its [status check endpoints](aem-status-check.md)
7. Optionally do some more [configuration fine tuning](aem-advanced-configurations.md)

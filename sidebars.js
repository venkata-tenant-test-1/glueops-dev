/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // main: [{ type: "autogenerated", dirName: "." }],

  // But you can create a sidebar manually
  main: [
    "introduction",
    "glueops-captain-domain",
    {
      type: "category",
      label: "Developers",
      collapsible: true,
      items: [
        "deploy-applications/deploy-hello-world-to-glueops",
        "deploy-applications/adding-configurations-and-secrets-to-the-hello-world-app-glueops-platform"
      ],
      link: {
        type: "generated-index",
        title: "Deploy your Applications to GlueOps",
        description: "You can deploy any application to GlueOps",
        slug: "/deploy-applications",
      },
    },
    {
      type: "category",
      label: "Platform Administrators",
      collapsible: true,
      items: [
        {
          type: "category",
          label: "Pre-Deployment Setup",
          collapsible: true,
          items: [
            "glueops-platform-administrator/predeployment/create-github-oauth-for-glueops",
            "glueops-platform-administrator/predeployment/create-github-app-for-glueops",
            "glueops-platform-administrator/predeployment/create-a-waf-aws-account",

            {
              type: "category",
              label: "Cloud Setup",
              collapsible: true,
              items: [
                "glueops-platform-administrator/predeployment/clouds/aws/cloud-setup-aws",
              ],
              link: {
                type: "generated-index",
                title: "Setup and Configuration",
                description: "You can only use one cloud for each cluster deployment. Please contact GlueOps team if you have any questions about which cloud to use.",
                slug: "/administrator-configuration-cloud-setup",
              },
            }
          ],
          link: {
            type: "generated-index",
            title: "Pre-Deployment Setup",
            description: "Before deploying your cluster, you need to create your GitHub OAuth App and GitHub App. These apps will be used to deploy your cluster and will need to be provided to the GlueOps team before they can proceed.",
            slug: "/predeployment",
          },
        },
        {
          type: "category",
          label: "Setup and Configuration",
          collapsible: true,
          items: [
            "glueops-platform-administrator/configuration/glueops-deployment-configuration",
            {
              type: "category",
              label: "GitHub token setup",
              collapsible: true,
              items: [
                
                  "glueops-platform-administrator/configuration/creating-github-token",
                  "glueops-platform-administrator/configuration/adding-github-token-to-organization-secrets"
                
              ],
              link: {
                type: "generated-index",
                title: "Creating a GitHub token using it.",
                description: "To enable GitHub Actions to notify our platform of code changes, we need to configure a GitHub Token as an Organization secret. These guides will walk you through setting it up:",
                slug: "/github-token-setup",
              },
            }

          ],
          link: {
            type: "generated-index",
            title: "Setup and Configuration",
            description: "Once your cluster is deployed by the GlueOps team you will need to configure your GitOps repository. We call this your deployment-configurations and you will be able to control all your application deployments from this repository.",
            slug: "/administrator-configuration-deployment-configuration",
          },
        },


      ],

    },

  ],
};

module.exports = sidebars;

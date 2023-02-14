(function (window, k) {
    if (!window.AppstleMembershipIncluded && (!urlIsProductPage() || 'V1' === 'V2')) {
      window.AppstleMembershipIncluded = true;
      appstleLoadScript = function (src, callback) {
        var script = document.createElement("script");
        script.charset = "utf-8";
        script.async = true;
        script.src = src;
        script.onload = script.onreadystatechange = function () {
          if (!script.readyState || /loaded|complete/.test(script.readyState)) {
            script.onload = script.onreadystatechange = null;
            script = k;
            callback && callback();
          }
        };
        document.getElementsByTagName("head")[0].appendChild(script)
      };
      appstleLoadScript("https://cdn.shopify.com/s/files/1/0600/4038/0594/t/21/assets/appstle-membership.js?v=1676361757");

      window.AM = Window.AM || {};
      AM.Config = {
        "selectors": {
            "payment_button_selectors": "form[action$='/cart/add'] .shopify-payment-button",
            "subscriptionLinkSelector": "#MainContent > div > div:nth-child(2)",
            "atcButtonPlacement": "BEFORE",
            "subscriptionLinkPlacement": "BEFORE"
        },
        "useUrlWithCustomerId": false,
        "atcButtonSelector": "div.product-form__buttons",
        "moneyFormat": "{% raw %}${{amount}}{% endraw %}",
        "oneTimePurchaseText": "One Time Purchase",
        "shop": "hverma1.myshopify.com",
        "deliveryText": "delivery",
        "purchaseOptionsText": "Membership Options",
        "manageSubscriptionButtonText": "Manage Membership",
        "subscriptionOptionText": "Join Now",
        "sellingPlanSelectTitle": "DELIVERY FREQUENCY",
        "subscriptionPriceDisplayText": "",
        "tooltipTitle": "Membership detail",
        "api_key": "NkNJoavjiCLu",
        "showTooltipOnClick": "false",
        "tooltipDesctiption": "<strong>Have complete control of your memberships<\/strong><br\/><br\/>Skip, reschedule, edit, cancel deliveries anytime matching your needs.",
        "tooltipDescriptionOnPrepaidPlan": "<b>Prepaid Plan Details<\/b><\/br> Total price: {{{totalPrice}}} ( Price for every delivery: {{{pricePerDelivery}}})",
        "tooltipDescriptionOnMultipleDiscount": "<b>Discount Details<\/b><\/br> Initial discount is {{discountOne}} and then {{discountTwo}}",
        "tooltipDescriptionCustomization": "{{{defaultTooltipDescription}}} <\/br>  {{{prepaidDetails}}} <\/br> {{{discountDetails}}}",
        "orderStatusManageSubscriptionTitle": "Membership",
        "orderStatusManageSubscriptionDescription": "Continue to your account to view and manage your memberships. Please use the same email address that you used to buy the membership.",
        "orderStatusManageSubscriptionButtonText": "Manage your membership",
        "subscriptionOptionSelectedByDefault" : false,
        "totalPricePerDeliveryText" : "{{prepaidPerDeliveryPrice}}\/delivery",
        "memberOnlySellingPlansJson": {},
        "fieldsBySellingPlanId": "{\"gid:\/\/shopify\/SellingPlan\/1538261170\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\"}",
        "rulesByCustomerTag": "{\"30-days-subscription\":[\"[{\\\"rule\\\":\\\"element\\\",\\\"selector\\\":\\\".product-form__submit\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"atc\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":\\\"\\\"}]\"]}",
        "membershipByCustomerTag": "{\"30-days-subscription\":[{\"id\":4032,\"shop\":\"hverma1.myshopify.com\",\"groupName\":\"30 Days Subscription\",\"subscriptionId\":369524914,\"productCount\":0,\"productVariantCount\":0,\"infoJson\":\"{\\\"id\\\":369524914,\\\"productCount\\\":0,\\\"productVariantCount\\\":null,\\\"subscriptionPlans\\\":[{\\\"frequencyCount\\\":30,\\\"frequencyInterval\\\":\\\"DAY\\\",\\\"billingFrequencyCount\\\":30,\\\"billingFrequencyInterval\\\":\\\"DAY\\\",\\\"frequencyName\\\":\\\"30 Days\\\",\\\"discountOffer\\\":10.0,\\\"discountOffer2\\\":null,\\\"afterCycle1\\\":0,\\\"afterCycle2\\\":null,\\\"discountType\\\":\\\"PERCENTAGE\\\",\\\"discountType2\\\":null,\\\"discountEnabled\\\":true,\\\"discountEnabled2\\\":null,\\\"discountEnabledMasked\\\":true,\\\"discountEnabled2Masked\\\":null,\\\"id\\\":\\\"gid:\/\/shopify\/SellingPlan\/1538261170\\\",\\\"frequencyType\\\":\\\"ON_PURCHASE_DAY\\\",\\\"specificDayValue\\\":null,\\\"specificDayEnabled\\\":false,\\\"maxCycles\\\":null,\\\"minCycles\\\":null,\\\"cutOff\\\":0,\\\"prepaidFlag\\\":\\\"false\\\",\\\"idNew\\\":\\\"gid:\/\/shopify\/SellingPlan\/1538261170\\\",\\\"planType\\\":\\\"PAY_AS_YOU_GO\\\",\\\"deliveryPolicyPreAnchorBehavior\\\":\\\"ASAP\\\"}],\\\"groupName\\\":\\\"30 Days Subscription\\\",\\\"productIds\\\":\\\"[]\\\",\\\"productId\\\":null,\\\"variantIds\\\":\\\"[{\\\\\\\"id\\\\\\\":42243166175410,\\\\\\\"title\\\\\\\":\\\\\\\"10LB Rogue Echo Pair V2 - Default Title\\\\\\\"}]\\\",\\\"accessoryProductIds\\\":null,\\\"customerTag\\\":\\\"30-days-subscription\\\",\\\"orderTag\\\":\\\"30 Days Subscription\\\",\\\"rulesJson\\\":\\\"[{\\\\\\\"rule\\\\\\\":\\\\\\\"element\\\\\\\",\\\\\\\"selector\\\\\\\":\\\\\\\".product-form__submit\\\\\\\",\\\\\\\"message\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"path\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"pathMatch\\\\\\\":\\\\\\\"contains\\\\\\\",\\\\\\\"discountCode\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountMessage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountUrl\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"deliveryFrequency\\\\\\\":\\\\\\\"Monthly\\\\\\\",\\\\\\\"limitAccessType\\\\\\\":\\\\\\\"atc\\\\\\\",\\\\\\\"elementRestrictType\\\\\\\":\\\\\\\"url\\\\\\\",\\\\\\\"bucketCategory\\\\\\\":\\\\\\\"tags\\\\\\\",\\\\\\\"bucketCategoryValue\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeText\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountPercentage\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountAmount\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"discountCodeDetails\\\\\\\":\\\\\\\"\\\\\\\"}]\\\",\\\"formFieldsJson\\\":\\\"[{\\\\\\\"label\\\\\\\":\\\\\\\"\\\\\\\",\\\\\\\"type\\\\\\\":\\\\\\\"text\\\\\\\",\\\\\\\"required\\\\\\\":false,\\\\\\\"visible\\\\\\\":false}]\\\"}\",\"productIds\":\"\",\"variantIds\":\"42243166175410\",\"variantProductIds\":\"7406009614514\",\"customerTag\":\"30-days-subscription\",\"orderTag\":\"30 Days Subscription\",\"rulesJson\":\"[{\\\"rule\\\":\\\"element\\\",\\\"selector\\\":\\\".product-form__submit\\\",\\\"message\\\":\\\"\\\",\\\"path\\\":\\\"\\\",\\\"pathMatch\\\":\\\"contains\\\",\\\"discountCode\\\":\\\"\\\",\\\"discountMessage\\\":\\\"\\\",\\\"discountUrl\\\":\\\"\\\",\\\"deliveryFrequency\\\":\\\"Monthly\\\",\\\"limitAccessType\\\":\\\"atc\\\",\\\"elementRestrictType\\\":\\\"url\\\",\\\"bucketCategory\\\":\\\"tags\\\",\\\"bucketCategoryValue\\\":\\\"\\\",\\\"discountCodeText\\\":\\\"\\\",\\\"discountPercentage\\\":\\\"\\\",\\\"discountAmount\\\":\\\"\\\",\\\"discountCodeDetails\\\":\\\"\\\"}]\",\"formFieldsJson\":\"[{\\\"label\\\":\\\"\\\",\\\"type\\\":\\\"text\\\",\\\"required\\\":false,\\\"visible\\\":false}]\",\"savedSearchId\":null,\"savedSegmentSearchId\":\"gid:\/\/shopify\/Segment\/417062846642\"}]}",
        "nonMemberOnlySellingPlansJson": {},
        "widgetEnabled": true,
        "showTooltip" : true,
        "sortByDefaultSequence": false,
        "showSubOptionBeforeOneTime": false,
        "showStaticTooltip": false,
        "showAppstleLink": false,
        "sellingPlanTitleText" : "{{sellingPlanName}} ({{{sellingPlanPrice}}}\/delivery)",
        "oneTimePriceText" : "{{price}}",
        "selectedPayAsYouGoSellingPlanPriceText" : "{{price}}",
        "selectedPrepaidSellingPlanPriceText" : "{{pricePerDelivery}}",
        "selectedDiscountFormat" : "SAVE {{selectedDiscountPercentage}}",
        "manageSubscriptionBtnFormat" : "<a href='apps\/memberships' class='appstle_manageSubBtn' ><button class='btn' style='padding: 2px 20px'>Manage Membership<\/button><a><br><br>",
        "manageSubscriptionUrl" : "apps\/memberships",
        "appstlePlanId": 1,
        "showCheckoutSubscriptionBtn": true,
        "disableLoadingJquery": false,
        "enableMessagingForNonMembers": "false",
        "nonMemberMessaging": "Please login to avail the membership perks.",
        "showMembershipBanner": "true",
        "showDiscountWidget": "false",
        "discountBadgeImageLink": "",
        "widgetBadgeImageLink": "",
        "productPagePriceDescriptionBlockPriceSelector": "",
        "productPagePriceDescriptionBlockParentSelector": "",
        "priceBlockSelector": "",
        "parentSelector": "",
        "css": {
            "appstle_membership_widget": {
                "margin-top": "" ,
                "margin-bottom": "",
            },

            "appstle_membership_wrapper": {
                "border-width": "",
                "border-color": "",
            },

            "appstle_circle": {
                "border-color": "",
            },

            "appstle_dot": {
                "background-color": "",
            },

            "appstle_select": {
                "padding-top": "",
                "padding-bottom": "",
                "padding-left": "",
                "padding-right": "",
                "border-width": "",
                "border-style": "",
                "border-color": "",
                "border-radius": "",
            },

            "tooltip_subscription_svg": {
                "fill": "",
            },

            "appstle_tooltip": {
                "color": "",
                "background-color": "",
            },

            "appstle_tooltip_border_top_color": {
                "border-top-color": "",
            },

            "appstle_membership_final_price": {
                "color": "",
            },
            "appstle_widget_text_color": {
                "color": "",
            },
            "appstle_selected_background": {
                "background": "transparent",
            },
            "customCSS": "",
            "customerPortalCss": "",
            "priceSelector": "span.price-item.price-item--regular",
            "landingPagePriceSelector": "",
            "quickViewClickSelector": "",
            "badgeTop": "",
            "pricePlacement": "BEFORE",
        }
      };

    }

    function urlIsProductPage() {
    // return null != decodeURIComponent(window.location.pathname).match(/\/products\/(([a-zA-Z0-9]|[\-\.\_\~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[\ud83c\ud83d\ud83e][\ud000-\udfff]){1,})\/?/)
    return decodeURIComponent(window.location.pathname).includes('/products/');
    }
  }
)(window);

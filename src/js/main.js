import $ from "jquery";
import slick from "slick-carousel";
import "../../node_modules/slick-carousel/slick/slick.scss";
import "../../node_modules/slick-carousel/slick/slick-theme.scss";
import styleSelect from "../vendor/custom_styleselect/custom_styleselect";
import autosize from "autosize";

$(() => {
    if (navigator.userAgent.indexOf("Firefox") != -1) {
        $("body").addClass("firefox");
    }

    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    styleSelect(".section-form__budget");
    styleSelect(".section-form__position");

    $(".section-form__input input")
        .each(showHideInputPlaceholder)
        .focusout(showHideInputPlaceholder)
        .focusin(function() {
            $(this).parent().addClass("section-form__input_hide-placeholder");
        });

    $(".section-form__textarea")
        .each(showHideSelectPlaceholder)
        .focusout(showHideSelectPlaceholder)
        .focusin(function() {
            $(".section-form__textarea-wrapper").addClass("section-form__textarea-wrapper_hide-placeholder");
        });

    autosize($(".section-form__textarea"));


    function showHideInputPlaceholder() {
        const action = this.value ? "addClass" : "removeClass";
        $(this).parent()[action]("section-form__input_hide-placeholder");
    }

    function showHideSelectPlaceholder() {
        const action = this.value ? "addClass" : "removeClass";
        $(".section-form__textarea-wrapper")[action]("section-form__textarea-wrapper_hide-placeholder")
    }
});

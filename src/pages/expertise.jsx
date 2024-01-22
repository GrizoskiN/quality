import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import img1 from "../../public/img/expertise_img1.webp";
import img from "../../public/img/expertise_img.webp";
import alex from "../../public/img/alex.png";
import laura from "../../public/img/laura.png";
import michael from "../../public/img/michael.png";
import call from "../../public/img/call.jpg"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const accurate = (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_729_103)">
      <path
        d="M69.724 9.74162L63.3589 9.73644L70.0896 2.95657C70.6332 2.41173 70.6324 1.51207 70.0876 0.96843C69.5429 0.424792 68.6255 0.416938 68.082 0.961782L61.2948 7.71987L61.2999 1.4433C61.3006 0.673658 60.677 0.0492698 59.9075 0.0486437C59.138 0.0480176 58.5135 0.67139 58.5129 1.44103L58.5055 10.5151L53.7409 15.3249C47.8263 9.90371 40.2282 6.93057 32.1534 6.924C23.5923 6.91704 15.5495 10.2444 9.49099 16.2932C3.43246 22.3419 0.0963694 30.3878 0.0894039 38.949C0.0824383 47.5102 3.41198 55.5615 9.46066 61.6202C15.5093 67.6787 23.5564 71.0191 32.1176 71.0261C40.6788 71.033 48.7306 67.7057 54.7893 61.657C60.848 55.6084 64.1885 47.5624 64.1955 39.0011C64.2021 30.8859 61.2111 23.2648 55.7477 17.329L60.5801 12.5212L69.7217 12.5287C70.4912 12.5293 71.1158 11.9059 71.1164 11.1363C71.117 10.3666 70.4935 9.74224 69.724 9.74162ZM61.4087 38.9988C61.3956 55.135 48.2571 68.2521 32.1209 68.239C15.9848 68.2259 2.86764 55.0874 2.88077 38.9512C2.8939 22.8151 16.0324 9.69793 32.1686 9.71106C39.7166 9.7172 46.6038 12.5957 51.7957 17.3092L48.8395 20.2718C44.4067 16.3109 38.5634 13.8968 32.1652 13.8916C18.3342 13.8804 7.07259 25.1236 7.06134 38.9546C7.05008 52.7856 18.2933 64.0472 32.1243 64.0584C45.9553 64.0697 57.2169 52.8264 57.2282 38.9954C57.2334 32.5634 54.8037 26.6878 50.8125 22.2402L53.7683 19.278C58.5173 24.487 61.4149 31.4113 61.4087 38.9988ZM39.1124 38.9807C39.1092 42.8226 35.981 45.9458 32.1391 45.9426C28.2971 45.9395 25.174 42.8113 25.1771 38.9694C25.1803 35.1274 28.3085 32.0043 32.1504 32.0074C33.5637 32.0086 34.879 32.4338 35.978 33.1608L31.1584 37.9907C30.6147 38.5354 30.6157 39.4178 31.1605 39.9614C31.4322 40.2325 31.7878 40.3683 32.1438 40.3686C32.5012 40.3689 32.8589 40.2324 33.1313 39.9594L37.9512 35.1292C38.6851 36.2336 39.1135 37.5579 39.1124 38.9807ZM37.9751 31.1593C36.3495 29.9437 34.334 29.2222 32.1527 29.2204C26.774 29.216 22.3945 33.5884 22.3901 38.9671C22.3857 44.3458 26.7581 48.7253 32.1368 48.7297C37.5155 48.7341 41.895 44.3617 41.8994 38.983C41.9012 36.7886 41.174 34.7608 39.9477 33.1283L43.4477 29.6207C45.5574 32.1655 46.826 35.431 46.8231 38.987C46.8166 47.0807 40.2265 53.66 32.1328 53.6534C24.0391 53.6468 17.4598 47.0568 17.4664 38.9631C17.4729 30.8694 24.063 24.2901 32.1567 24.2966C35.6929 24.2995 38.94 25.5593 41.4751 27.6519L37.9751 31.1593ZM43.4495 25.6733C40.4043 23.0812 36.4619 21.5131 32.159 21.5096C22.5285 21.5018 14.6871 29.3305 14.6793 38.9608C14.6715 48.5912 22.5002 56.4326 32.1305 56.4405C41.7609 56.4483 49.6024 48.6196 49.6102 38.9892C49.6137 34.6628 48.0349 30.698 45.4224 27.6417L48.8411 24.2157C52.3275 28.155 54.4457 33.3314 54.4411 38.9932C54.4311 51.2875 44.421 61.2814 32.1266 61.2714C19.8324 61.2614 9.83838 51.2512 9.84838 38.9569C9.85839 26.6627 19.8687 16.6687 32.1629 16.6787C37.7945 16.6833 42.9427 18.7872 46.8685 22.2469L43.4495 25.6733Z"
        fill="#5A38FD"
      />
    </g>
    <defs>
      <clipPath id="clip0_729_103">
        <rect
          width="71"
          height="71"
          fill="white"
          transform="translate(0.123047) rotate(0.0466172)"
        />
      </clipPath>
    </defs>
  </svg>
);
const experience = (
  <svg
    width="72"
    height="72"
    viewBox="0 0 72 72"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_729_112)">
      <path
        d="M6.67193 63.9259C7.22863 64.535 8.09266 64.7574 8.87444 64.4928L17.7818 61.4764L21.4976 70.1152C21.8246 70.8753 22.5709 71.3694 23.3983 71.3734L23.4069 71.3734C24.2309 71.3741 24.9779 70.8882 25.3112 70.134L32.2635 54.3988C33.35 54.5331 34.4559 54.604 35.578 54.6049C36.7002 54.6058 37.8062 54.5368 38.8929 54.4042L45.8196 70.1507C46.1515 70.9055 46.8979 71.3927 47.722 71.3932L47.7306 71.3932C48.5581 71.3905 49.3051 70.8976 49.6333 70.1381L53.3633 61.5054L62.2658 64.5362C63.0464 64.8022 63.9115 64.5813 64.4692 63.9729C65.027 63.3647 65.1725 62.4843 64.8399 61.7289L57.0434 44.0178C60.5475 39.4621 62.6365 33.7639 62.6415 27.5854C62.6537 12.5982 50.5329 0.395463 35.6223 0.383332C20.7117 0.3712 8.57099 12.5542 8.55879 27.5414C8.55377 33.7198 10.6335 39.4216 14.1302 43.9829L6.30489 61.6813C5.97118 62.4361 6.1151 63.3168 6.67193 63.9259ZM59.1248 59.0722L52.8859 56.948C51.8592 56.5983 50.7362 57.0966 50.306 58.0922L47.7066 64.1082L43.0649 53.556C47.1899 52.3695 50.9128 50.2249 53.978 47.3803L59.1248 59.0722ZM12.719 27.5448C12.7293 14.8515 23.0022 4.53328 35.6189 4.54354C48.2356 4.55381 58.4917 14.8888 58.4813 27.582C58.4711 40.1987 48.1982 50.4548 35.5816 50.4445C22.9649 50.4343 12.7087 40.1614 12.719 27.5448ZM17.19 47.3503C20.2507 50.1999 23.9701 52.3507 28.0931 53.5438L23.4341 64.0883L20.8447 58.0681C20.4161 57.0716 19.2939 56.5718 18.2667 56.9197L12.0243 59.0337L17.19 47.3503Z"
        fill="#5A38FD"
      />
      <path
        d="M27.4283 30.2111L26.2062 37.301C26.0718 38.0812 26.3919 38.8702 27.032 39.3361C27.6711 39.8012 28.5203 39.8647 29.2225 39.4963L35.5933 36.1536L41.9585 39.5066C42.6591 39.8756 43.5086 39.8149 44.1492 39.35C44.7901 38.8852 45.1117 38.0968 44.9785 37.3162L43.7681 30.2244L48.9239 25.2068C49.4912 24.6547 49.696 23.8282 49.4519 23.075C49.2077 22.3218 48.5574 21.7724 47.774 21.6579L40.6552 20.6176L37.4765 14.1637C37.1266 13.4534 36.4038 13.0032 35.6121 13.0026C34.8204 13.0019 34.0969 13.4508 33.7459 14.1606L30.5567 20.6094L23.4362 21.6381C22.6526 21.7513 22.0011 22.2997 21.7558 23.0525C21.5105 23.8053 21.7139 24.6321 22.2804 25.1853L27.4283 30.2111ZM32.2339 24.5703C32.9115 24.4724 33.4975 24.0475 33.801 23.4337L35.6066 19.7826L37.4062 23.4366C37.7088 24.0507 38.2942 24.4768 38.9715 24.5758L43.0019 25.1649L40.0828 28.0056C39.5922 28.483 39.368 29.1714 39.4832 29.8463L40.1685 33.8614L36.5646 31.9631C35.959 31.6441 35.235 31.6433 34.6288 31.9615L31.0218 33.854L31.7136 29.8399C31.8298 29.1652 31.6067 28.4765 31.1169 27.9983L28.2023 25.1528L32.2339 24.5703Z"
        fill="#5A38FD"
      />
    </g>
    <defs>
      <clipPath id="clip0_729_112">
        <rect
          width="71"
          height="71"
          fill="white"
          transform="translate(0.123047 0.354492) rotate(0.0466172)"
        />
      </clipPath>
    </defs>
  </svg>
);
const technology = (
  <svg
    width="69"
    height="69"
    viewBox="0 0 69 69"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_729_135)">
      <path
        d="M28.1716 16.0505C27.9029 15.3679 27.1321 15.0322 26.4494 15.3012C22.5959 16.8184 19.306 19.4251 16.9357 22.8397C14.5085 26.3357 13.2239 30.4412 13.2205 34.7122C13.2199 35.4457 13.8141 36.0407 14.5474 36.0413C15.2806 36.0419 15.8758 35.4477 15.8764 34.7144C15.8826 27.1819 20.4146 20.5319 27.4223 17.7729C28.1049 17.5041 28.4403 16.7331 28.1716 16.0505Z"
        fill="#5A38FD"
      />
      <path
        d="M42.8452 33.4211C42.1118 33.4205 41.5167 34.0146 41.5161 34.748C41.5128 38.8487 38.1738 42.1824 34.073 42.179C29.9721 42.1757 26.6386 38.8367 26.6419 34.7359C26.6452 30.6352 29.9842 27.3015 34.0851 27.3048C34.8185 27.3054 35.4135 26.7113 35.4141 25.9779C35.4147 25.2444 34.8205 24.6494 34.0872 24.6488C28.5218 24.6443 23.9905 29.1683 23.9859 34.7337C23.9814 40.2991 28.5056 44.8305 34.0708 44.835C39.636 44.8395 44.1676 40.3155 44.1721 34.7501C44.1727 34.0167 43.5786 33.4217 42.8452 33.4211Z"
        fill="#5A38FD"
      />
      <path
        d="M47.7674 33.3751C47.0341 33.3745 46.439 33.9686 46.4384 34.702L46.4383 34.7521C46.4377 35.4856 47.032 36.0806 47.7652 36.0812C48.4985 36.0818 49.0937 35.4876 49.0943 34.7542L49.0944 34.7042C49.095 33.9708 48.5007 33.3757 47.7674 33.3751Z"
        fill="#5A38FD"
      />
      <path
        d="M42.3858 45.4818C42.1391 45.2332 41.7966 45.0922 41.4473 45.0919C41.098 45.0917 40.7553 45.2323 40.508 45.4803C40.2607 45.7271 40.1183 46.0683 40.1181 46.4189C40.1178 46.7682 40.2595 47.111 40.5064 47.3582C40.7534 47.6055 41.0945 47.7465 41.4451 47.7468C41.7944 47.7471 42.1372 47.6066 42.3843 47.3598C42.6315 47.1129 42.774 46.7704 42.7743 46.4211C42.7746 46.0703 42.6328 45.729 42.3858 45.4818Z"
        fill="#5A38FD"
      />
      <path
        d="M63.5668 48.9022C62.8039 48.9016 62.085 49.0919 61.4538 49.4268L57.5269 45.4935C57.2779 45.2442 56.9403 45.104 56.5881 45.1037L46.9042 45.0958C46.1708 45.0952 45.5757 45.6893 45.5751 46.4227C45.5745 47.1562 46.1687 47.7512 46.902 47.7518L56.0356 47.7592L59.5745 51.3038C59.2393 51.9339 59.0482 52.6517 59.0476 53.4136C59.0456 55.9035 61.0695 57.9306 63.5593 57.9327C66.0491 57.9347 68.0763 55.9108 68.0783 53.421C68.0805 50.9313 66.0565 48.9043 63.5668 48.9022ZM63.5616 55.2768C62.5363 55.276 61.703 54.4412 61.7039 53.4161C61.7047 52.3908 62.5394 51.5575 63.5646 51.5583C64.5898 51.5592 65.4232 52.3939 65.4223 53.4191C65.4215 54.4443 64.5866 55.2777 63.5616 55.2768Z"
        fill="#5A38FD"
      />
      <path
        d="M63.5967 11.5687C61.1069 11.5667 59.0797 13.5906 59.0777 16.0804C59.077 16.8425 59.2669 17.5606 59.6012 18.1912L56.0566 21.7301L41.5247 21.7183C39.6793 20.6612 37.6065 19.9888 35.4331 19.7898L35.435 17.3892L49.4389 17.4006C49.9226 17.401 50.3683 17.1384 50.6023 16.7152L54.644 9.40459C55.1912 9.64117 55.7937 9.77315 56.4269 9.77366C58.9168 9.77569 60.944 7.75181 60.946 5.26198C60.948 2.77228 58.9241 0.745106 56.4343 0.74308C53.9445 0.741054 51.9173 2.76493 51.9153 5.25476C51.9146 6.12548 52.1623 6.9389 52.5903 7.6296L48.6571 14.7438L35.4372 14.7331L35.4475 2.05958C35.4481 1.32605 34.8539 0.7311 34.1206 0.730503L28.1656 0.725658C27.4322 0.725062 26.8371 1.31918 26.8365 2.05257L26.8331 6.16219C24.0887 6.85509 21.4752 7.93552 19.0395 9.38465L16.147 6.48765C15.8981 6.23842 15.5603 6.09816 15.208 6.09787C14.8558 6.09759 14.5178 6.23743 14.2685 6.48652L5.86756 14.8801C5.34877 15.3984 5.34822 16.2389 5.8663 16.7578L8.75541 19.6517C7.30245 22.0854 6.21777 24.6969 5.52053 27.4401L1.43124 27.4368C0.697846 27.4362 0.102761 28.0303 0.102164 28.7637L0.0925021 40.6394C0.0919053 41.3729 0.686156 41.9679 1.41941 41.9685L5.50897 41.9718C6.20162 44.7162 7.28205 47.3295 8.73117 49.7654L5.83736 52.6546C5.31844 53.1727 5.31762 54.0131 5.83557 54.5323L14.2229 62.9395C14.4717 63.1889 14.8095 63.3293 15.1617 63.3297L15.1619 63.3297C15.5142 63.33 15.852 63.1903 16.1014 62.9414L18.9984 60.0493C21.432 61.5022 24.0436 62.587 26.7867 63.2844L26.7833 67.3875C26.7827 68.1208 27.3764 68.7156 28.1094 68.7166L34.0644 68.7214L34.0651 68.7214C34.4172 68.7217 34.7551 68.5855 35.0043 68.3368C35.2537 68.0878 35.3941 67.7501 35.3944 67.3977L35.4047 54.6625L48.6222 54.6732L52.5478 61.8476C52.1177 62.5382 51.8681 63.3521 51.8674 64.2238C51.8654 66.7136 53.8893 68.7408 56.3791 68.7428C58.8689 68.7448 60.8961 66.7209 60.8981 64.2311C60.9002 61.7413 58.8762 59.7141 56.3863 59.7121C55.7547 59.7116 55.153 59.8419 54.6065 60.0768L50.5748 52.7083C50.3421 52.2828 49.8958 52.018 49.4109 52.0176L35.4066 52.0062L35.4095 48.4308C35.4101 47.6973 34.8159 47.1023 34.0826 47.1017C27.2603 47.0962 21.7146 41.5414 21.7201 34.7191C21.7256 27.9794 27.1471 22.4863 33.8558 22.3596C33.9314 22.3731 34.0088 22.3814 34.0884 22.3814C39.2283 22.3856 43.8828 25.6247 45.6704 30.4413C45.8689 30.9763 46.3754 31.3073 46.9144 31.3077C47.0682 31.3078 47.2248 31.281 47.3774 31.2244C48.0651 30.9692 48.4157 30.205 48.1604 29.5174C47.4359 27.5651 46.3223 25.8279 44.9298 24.377L56.6044 24.3865C56.9567 24.3868 57.2945 24.2471 57.5439 23.9983L61.4773 20.0713C62.1078 20.4073 62.8265 20.5987 63.5894 20.5993C66.0792 20.6014 68.1064 18.5775 68.1084 16.0876C68.1104 13.5979 66.0864 11.5708 63.5967 11.5687ZM56.4321 3.3992C57.4574 3.40003 58.2907 4.23477 58.2899 5.25995C58.289 6.28513 57.4543 7.11851 56.4291 7.11768C55.4039 7.11685 54.5705 6.2821 54.5714 5.25693C54.5722 4.23175 55.4068 3.39836 56.4321 3.3992ZM56.3842 62.3685C57.4095 62.3693 58.2427 63.204 58.2419 64.2292C58.241 65.2544 57.4062 66.0878 56.3811 66.0869C55.3558 66.0861 54.5226 65.2514 54.5234 64.2262C54.5242 63.201 55.3588 62.3676 56.3842 62.3685ZM32.777 19.7577C25.1096 20.4262 19.0704 26.8779 19.064 34.7171C19.0576 42.5562 25.0861 49.0178 32.7525 49.6987L32.7392 66.067L29.4403 66.0625L29.4434 62.2338C29.4439 61.6078 29.0072 61.0665 28.3953 60.9345C25.232 60.2522 22.2482 59.0129 19.5266 57.251C19.0012 56.9109 18.3097 56.9837 17.8666 57.426L15.1647 60.1236L8.65328 53.5967L11.3529 50.9014C11.7958 50.4591 11.8699 49.7678 11.5305 49.2417C9.77307 46.5172 8.53862 43.5315 7.86173 40.3671C7.73074 39.755 7.19015 39.3175 6.56421 39.317L2.74957 39.3138L2.75707 30.0943L6.57157 30.0974C7.19765 30.0979 7.73882 29.6611 7.8708 29.0494C8.55298 25.886 9.79216 22.9024 11.554 20.1807C11.8943 19.6553 11.8213 18.9637 11.3791 18.5207L8.68389 15.8211L15.2059 9.30477L17.9034 12.0068C18.3458 12.4499 19.0372 12.5237 19.5631 12.1845C22.2875 10.4271 25.2733 9.1925 28.4379 8.51534C29.05 8.38435 29.4875 7.84376 29.488 7.21781L29.4911 3.38285L32.79 3.38554L32.7767 19.7577L32.777 19.7577ZM63.5915 17.9432C62.5662 17.9424 61.733 17.1076 61.7338 16.0825C61.7346 15.0573 62.5694 14.2239 63.5945 14.2247C64.6197 14.2256 65.4531 15.0603 65.4523 16.0855C65.4514 17.1107 64.6167 17.944 63.5915 17.9432Z"
        fill="#5A38FD"
      />
      <path
        d="M63.5815 30.2549C61.5537 30.2532 59.8331 31.5955 59.2632 33.4387L55.3449 33.4355C54.6115 33.4349 54.0165 34.029 54.0159 34.7624C54.0153 35.4958 54.6095 36.0909 55.3428 36.0915L59.2609 36.0947C59.8278 37.9387 61.5462 39.2839 63.574 39.2856C66.0639 39.2876 68.091 37.2637 68.093 34.7739C68.0952 32.284 66.0712 30.2569 63.5815 30.2549ZM63.5763 36.6295C62.551 36.6286 61.7177 35.7939 61.7186 34.7687C61.7194 33.7435 62.5542 32.9101 63.5793 32.911C64.6045 32.9118 65.4379 33.7465 65.4371 34.7717C65.4362 35.7969 64.6014 36.6303 63.5763 36.6295Z"
        fill="#5A38FD"
      />
    </g>
    <defs>
      <clipPath id="clip0_729_135">
        <rect
          width="68"
          height="68"
          fill="white"
          transform="translate(0.123047 0.697266) rotate(0.0466172)"
        />
      </clipPath>
    </defs>
  </svg>
);

const Expertise = () => {
  return (
    <div>
      <h1 className="w-2/3 m-auto mt-48 lg:text-5xl">
        Welcome to Quality Estimations,{" "}
        <span className="font-light text-royal/80">
          {" "}
          trusted partner in quality estimation services. With a strong
          commitment to excellence and a proven track record, we stand as a
          leader in
        </span>{" "}
        your delivering accurate and reliable quality assessments.
      </h1>

      <Image src={img1} width={1000} className="w-2/3 m-auto my-32" />

      <h1 className="w-2/3 m-auto mt-48 lg:text-5xl">Our Approach </h1>
      <p className="w-2/3 m-auto mt-5 text-2xl">
        At Quality Estimations, we leverage cutting-edge technologies and
        industry-best practices to provide comprehensive quality estimation
        solutions. Our team of experienced professionals employs a meticulous
        approach, ensuring precision and reliability in every assessment.
      </p>

      <div className=" py-32  lg:py-48 my-32 relative">
        <Image
          src={img}
          width={5000}
          className="w-full h-full absolute top-0 left-0 object-cover -z-10"
        />
        <h1 className="w-10/12 xl:w-2/3 m-auto font-bold text-white mb-16 lg:mb-32 text-4xl lg:text-5xl">
          We specialize in
        </h1>
        <Tabs defaultValue="industry" className="w-[90%] xl:w-2/3 m-auto ">
          <TabsList className="xl:gap-11">
            <TabsTrigger
              className="border-[0px] border-b-[1px]  text-white font-bold border-white hover:bg-white/20 "
              value="industry">
              Industry Expertise
            </TabsTrigger>
            <TabsTrigger
              className="border-[0px] border-b-[1px]  text-white font-bold border-white hover:bg-white/20 "
              value="methodologies">
              Methodologies
            </TabsTrigger>
            <TabsTrigger
              className="border-[0px] border-b-[1px]  text-white font-bold border-white hover:bg-white/20 "
              value="services">
              Services Offered
            </TabsTrigger>
          </TabsList>

          <TabsContent
            value="industry"
            className="text-white bg-transparent border-white/20 border-[1px]">
            <div className="mt-5 text-xl ">
              <h3 className="font-semibold mb-11 text-3xl">
                We specialize in serving a diverse range of industries,
                including but not limited to:
              </h3>
              <div className="">
                List of industries we serve:
                <ul className="mt-5 text-gray-400">
                  <li>✅ Manufacturing </li>
                  <li>✅ Healthcare </li>
                  <li>✅ Technology</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="methodologies"
            className="text-white bg-transparent border-white/20 border-[1px]">
            <div className="mt-5 text-xl ">
              <h3 className="font-semibold mb-11 text-3xl">
                Our quality estimation methodologies are tailored to meet the
                unique needs of each industry.
              </h3>
              <div className="">
                We employ a combination of:
                <ul className="mt-5 text-gray-400">
                  <li>✅ Advanced data analytics </li>
                  <li>✅ State-of-the-art technology </li>
                  <li>✅ Rigorous quality control processes</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          <TabsContent
            value="services"
            className="text-white bg-transparent border-white/20 border-[1px]">
            <div className="mt-5 text-xl ">
              <h3 className="font-semibold mb-11 text-3xl">
                Explore our comprehensive range of quality estimation services,
                including:
              </h3>
              <div className="">
                We employ a combination of:
                <ul className="mt-5 text-gray-400">
                  <li>✅ Advanced data analytics </li>
                  <li>✅ State-of-the-art technology </li>
                  <li>✅ Rigorous quality control processes</li>
                </ul>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      <div>
        <h1 className="w-10/12 xl:w-2/3 m-auto font-bold text-black text-center mb-16 lg:mb-32 text-4xl lg:text-5xl">
          Why choose us
        </h1>

        <div className="flex flex-col lg:flex-row w-10/12 xl:w-2/3 m-auto lg:gap-5 gap-16 items-start">
          <div className="flex flex-col text-center justify-center items-center">
            {accurate}
            <h1 className="font-semibold text-2xl mt-5 mb-3">
              Accurate Results
            </h1>
            <p className="">
              Our commitment to accuracy sets us apart. Benefit from precise
              quality estimates to make informed decisions.
            </p>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            {experience}
            <h1 className="font-semibold text-2xl mt-5 mb-3">
              Industry Experience
            </h1>
            <p className="">
              With years of experience, we bring a deep understanding of
              industry-specific challenges and requirements.
            </p>
          </div>
          <div className="flex flex-col text-center justify-center items-center">
            {technology}
            <h1 className="font-semibold text-2xl mt-5 mb-3">
              Cutting-Edge Technology
            </h1>
            <p className="">
              Stay ahead with our use of the latest technologies, ensuring
              efficiency and reliability in every assessment.
            </p>
          </div>
        </div>
      </div>

      <div className="w-2/3 m-auto">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}>
          <CarouselContent>
            <CarouselItem className="py-32">
              <Image src={alex} className="flex justify-center w-fit m-auto" />
              <p className="xl:w-2/3 m-auto md:text-center lg:text-2xl font-light my-11">
                As an architect, precision and accuracy are non-negotiable in
                our field. Quality Estimations has been an invaluable partner,
                consistently delivering accurate and reliable estimates for our
                projects. Their expertise in estimation services has not only
                saved us time but has also allowed us to make informed decisions
                throughout the design process. I highly recommend Quality
                Estimations for any architect seeking meticulous and dependable
                estimation services.
              </p>
              <div className="md:w-2/3 m-auto text-center">
                <h1 className="md:text-4xl text-2xl">Alex Rodriguez</h1>
                <h2 className="md:text-xl text-gray-800 mt-3">
                  Principal Architect
                </h2>
                <h3 className="md:text-sm text-gray-500">
                  Design Dynamics Studio
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="py-32">
              <Image src={laura} className="flex justify-center w-fit m-auto" />
              <p className="xl:w-2/3 m-auto md:text-center lg:text-2xl font-light my-11">
                Our collaboration with Quality Estimations has significantly
                elevated our project planning and budgeting. Their team's
                proficiency in providing detailed estimates has been crucial in
                ensuring that our architectural projects stay on track. Quality
                Estimations understands the unique challenges of our industry,
                and their commitment to excellence is evident in every estimate
                they provide. I trust them as a reliable partner in achieving
                project success.
              </p>
              <div className="md:w-2/3 m-auto text-center">
                <h1 className="md:text-4xl text-2xl">Laura Turner</h1>
                <h2 className="md:text-xl text-gray-800 mt-3">
                  Project Manager
                </h2>
                <h3 className="md:text-sm text-gray-500">
                  Urban Vision Architects
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem className="py-32 ">
              <Image src={michael} className="flex justify-center w-fit m-auto" />
              <p className=" xl:w-2/3 m-auto md:text-center lg:text-2xl font-light my-11">
              Quality Estimations has become an integral part of our architectural project lifecycle. Their accurate and comprehensive estimation services have allowed us to manage costs effectively and deliver exceptional results to our clients. The team's responsiveness and dedication to understanding the intricacies of our designs make them a standout choice for any architectural firm seeking top-notch estimation services.
              </p>
              <div className="md:w-2/3 m-auto text-center">
                <h1 className="md:text-4xl text-2xl">Michael Thompson</h1>
                <h2 className="md:text-xl text-gray-800 mt-3">
                Lead Architect
                </h2>
                <h3 className="md:text-sm text-gray-500">
                Precision Designs LLC
                </h3>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="relative text-white flex flex-col items-center justify-center text-center py-11 lg:py-32 my-32">
      <div className="">
        <h1 className="font-bold text-3xl xl:text-5xl ">CALL US NOW AND STAY HASSLE-FREE!</h1>
        <p className="font-light  lg:text-xl my-4">
          We provide Turnkey Solutions to All Construction estimation needs!
        </p>
        <h3 className="text-2xl text-yellow">Hire Us to Get Full Service!</h3>
      </div>
      <div className="mt-5 xl:mt-11">
        <h1 className="font-bold text-3xl">Call Us Now:</h1>
        <button className="bg-gradient-to-r from-[#071230] to-[#50659C] text-xl px-11 py-2 mt-3">+1(469) 638 3584</button>
      </div>
      <Image src={call} width={2000} className="absolute w-full h-full top-0  object-cover -z-10"/>
    </div>
    <h1 className="w-2/3 m-auto mt-48 lg:text-5xl">
    At Quality Estimations,
        <span className="font-light text-royal/80">
         
        we are dedicated to delivering unparalleled expertise in quality estimation. Trust us to be your partner
        </span>
        in achieving and maintaining the highest standards of quality.
      </h1>
    </div>
    
  );
};

export default Expertise;

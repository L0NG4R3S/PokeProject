import React from 'react';
import {Svg, Rect, Defs, Path} from 'react-native-svg';
// import { IconType } from 'types/icons';

type IconType = {
  width: number;
  height: number;
  color: string;
};

const PokemonIcon = ({width, height, color}: IconType) => {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 width="135px" height="135px" viewBox="0 0 135 135" style="enable-background:new 0 0 135 135;" xml:space="preserve">
<style type="text/css">
<![CDATA[
	.st0{fill:#465652;}
	.st1{fill:#AAB9BA;}
	.st2{fill:#47C67B;}
	.st3{fill:#AAC8D1;}
	.st4{fill:none;stroke:#E83834;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st5{fill:#7BC67B;}
	.st6{fill:#7BC7FF;}
	.st7{fill:#7C34C1;}
	.st8{fill:#7C8D96;}
	.st9{fill:#AD2707;}
	.st10{fill:#ADB8BC;}
	.st11{fill:#107510;}
	.st12{fill:#7FE5D8;}
	.st13{fill:#AF4AD1;}
	.st14{fill:#E02B7E;}
	.st15{fill:#E04038;}
	.st16{fill:#AFD7DD;}
	.st17{fill:#E0A010;}
	.st18{fill:#E0D5A4;}
	.st19{fill:#12B2B2;}
	.st20{fill:#12D66B;}
	.st21{fill:#E1A9FF;}
	.st22{fill:#1362A8;}
	.st23{fill:#E2378D;}
	.st24{fill:#E29C37;}
	.st25{fill:#E2B90E;}
	.st26{fill:#E2BF91;}
	.st27{fill:#E2CBAA;}
	.st28{fill:#14A594;}
	.st29{fill:#E4E9ED;}
	.st30{fill:#4A5D60;}
	.st31{fill:#E5B076;}
	.st32{fill:#E5B1C4;}
	.st33{fill:#E5E4C3;}
	.st34{fill:#4B6466;}
	.st35{fill:#E6FF2E;}
	.st36{fill:#18AA67;}
	.st37{fill:#E86207;}
	.st38{fill:#E8A113;}
	.st39{fill:#E8B5A6;}
	.st40{fill:#E8E8ED;}
	.st41{fill:#4E5154;}
	.st42{fill:#E9F1F4;}
	.st43{fill:#4F4B48;}
	.st44{fill:#4F74E8;}
	.st45{fill:#808E93;}
	.st46{fill:#80949B;}
	.st47{fill:#80EDAC;}
	.st48{fill:#B122E0;}
	.st49{fill:#B2C4CC;}
	.st50{fill:#83D839;}
	.st51{fill:#B3C6C6;}
	.st52{fill:none;stroke:#33363A;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
	.st53{fill:#1A8E1C;}
	.st54{fill:#1A93D6;}
	.st55{fill:#B50B0B;}
	.st56{fill:#1AD88F;}
	.st57{fill:#B5DAF4;}
	.st58{fill:#EA7B1F;}
	.st59{fill:#EA81BD;}
	.st60{fill:#87B8D6;}
	.st61{fill:#87C3F4;}
	.st62{fill:#EAC79D;}
	.st63{fill:#EADF11;}
	.st64{fill:#EAE4C5;}
	.st65{fill:#B78094;}
	.st66{fill:#8844D8;}
	.st67{fill:#EBF4F7;}
	.st68{fill:#893015;}
	.st69{fill:#89410B;}
	.st70{fill:#899BA3;}
	.st71{fill:#EDE3B9;}
	.st72{enable-background:new    ;}
	.st73{fill:#50FF9F;}
	.st74{fill:#EEDCF4;}
	.st75{fill:#EFA37D;}
	.st76{fill:#EFA3CC;}
	.st77{fill:#EFC99A;}
	.st78{fill:#54AF79;}
	.st79{fill:#BA503A;}
	.st80{fill:#BA8663;}
	.st81{fill:#8B4FE0;}
	.st82{fill:#58ED9B;}
	.st83{fill:#BC7DFF;}
	.st84{fill:#8D9AA3;}
	.st85{fill:#BCCAD3;}
	.st86{fill:#8DE4FF;}
	.st87{fill:#20B518;}
	.st88{fill:#BF44F2;}
	.st89{fill:#21CEA1;}
	.st90{fill:#BFDAE0;}
	.st91{fill:#F0FBFC;}
	.st92{fill:#F2D9A7;}
	.st93{fill:#F2EAC9;}
	.st94{fill:#24D1AF;}
	.st95{fill:#25931C;}
	.st96{fill:#F4C4B3;}
	.st97{fill:#F4D3A2;}
	.st98{fill:#F4D647;}
	.st99{fill:#F4D7B8;}
	.st100{fill:#F4EC8E;}
	.st101{fill:#5B524D;}
	.st102{fill:#F77819;}
	.st103{fill:#F79AE1;}
	.st104{fill:#5E707A;}
	.st105{fill:#F93585;}
	.st106{fill:#F95D5D;}
	.st107{fill:#F9C19B;}
	.st108{fill:#F9CB58;}
	.st109{fill:#F9D2B2;}
	.st110{fill:#F9F07D;}
	.st111{fill:#F9F1D2;}
	.st112{fill:#F9F4B7;}
	.st113{fill:#F9F9E4;}
	.st114{fill:#5F1DAA;}
	.st115{fill:#5F9AD6;}
	.st116{fill:#C0C0C4;}
	.st117{fill:#91EA57;}
	.st118{fill:#C12727;}
	.st119{fill:#C191A0;}
	.st120{fill:#923BB7;}
	.st121{fill:#93A0A3;}
	.st122{fill:#93F9EA;}
	.st123{fill:#93FF5A;}
	.st124{fill:#C4833D;}
	.st125{fill:#95A2A5;}
	.st126{fill:#965514;}
	.st127{fill:#96562C;}
	.st128{fill:#2AF42F;}
	.st129{fill:#C5D7DD;}
	.st130{fill:#C68510;}
	.st131{fill:#C6A86D;}
	.st132{fill:#C6BB8D;}
	.st133{fill:#2C9DCE;}
	.st134{fill:#FBFCF2;}
	.st135{fill:#FC70B0;}
	.st136{fill:#FCE6C8;}
	.st137{fill:#FCF7E3;}
	.st138{fill:#C90D6B;}
	.st139{fill:#FDFEFF;}
	.st140{fill:#FDFFDC;}
	.st141{fill:#FF1A1A;}
	.st142{fill:#FF5252;}
	.st143{fill:#FF5B00;}
	.st144{fill:#FF6155;}
	.st145{fill:#FF630D;}
	.st146{fill:#FF6666;}
	.st147{fill:#FF7676;}
	.st148{fill:#FF7900;}
	.st149{fill:#FF860D;}
	.st150{fill:#FF8B00;}
	.st151{fill:#FF8F8F;}
	.st152{fill:#FF900B;}
	.st153{fill:#FF908A;}
	.st154{fill:#FF960B;}
	.st155{fill:#FF9C0D;}
	.st156{fill:#FFA9D4;}
	.st157{fill:#FFAA00;}
	.st158{fill:#FFAD40;}
	.st159{fill:#FFAF10;}
	.st160{fill:#FFB000;}
	.st161{fill:#FFBE08;}
	.st162{fill:#FFBF31;}
	.st163{fill:#FFC200;}
	.st164{fill:#FFCAE8;}
	.st165{fill:#FFCCF5;}
	.st166{fill:#FFD00B;}
	.st167{fill:#FFD039;}
	.st168{fill:#FFD400;}
	.st169{fill:#FFD833;}
	.st170{fill:#FFDB80;}
	.st171{fill:#FFDDD2;}
	.st172{fill:#FFE6D4;}
	.st173{fill:#FFE6EB;}
	.st174{fill:#FFE98D;}
	.st175{fill:#FFECD2;}
	.st176{fill:#FFF1D9;}
	.st177{fill:#FFF24D;}
	.st178{fill:#FFF3C2;}
	.st179{fill:#FFF4C7;}
	.st180{fill:#FFF800;}
	.st181{fill:#FFF80D;}
	.st182{fill:#FFF9DE;}
	.st183{fill:#FFFBD7;}
	.st184{fill:#FFFBEB;}
	.st185{fill:#FFFCC0;}
	.st186{fill:#FFFCDC;}
	.st187{fill:#FFFFFA;}
	.st188{fill:#FFFFFF;}
	.st189{fill:#63797F;}
	.st190{fill:#65E529;}
	.st191{fill:#66310E;}
	.st192{fill:#663C17;}
	.st193{fill:#9A5AE5;}
	.st194{fill:#CA30EF;}
	.st195{fill:#6892FC;}
	.st196{fill:#9CFFC4;}
	.st197{fill:#CC4306;}
	.st198{fill:#CC549E;}
	.st199{fill:#9E3256;}
	.st200{fill:#CDFFBB;}
	.st201{fill:#CE86AF;}
	.st202{fill:#CED9DD;}
	
		.st203{fill:none;stroke:#33363A;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;stroke-dasharray:6;}
	.st204{fill:#CFE1E2;}
	.st205{fill:#33363A;}
	.st206{fill:#34C166;}
	.st207{fill:#364B5B;}
	.st208{fill:#3662CE;}
	.st209{fill:#36C6FF;}
	.st210{fill:#6ADB9A;}
	.st211{fill:#6D5C4D;}
	.st212{fill:#6EBDF9;}
	.st213{fill:#0031FF;}
	.st214{fill:#0062FF;}
	.st215{fill:#0068FF;}
	.st216{fill:#0086FF;}
	.st217{fill:#009BE8;}
	.st218{fill:#00AAFF;}
	.st219{fill:#D271FF;}
	.st220{fill:#D363A9;}
	.st221{fill:#D3964C;}
	.st222{fill:#D3DFE2;}
	.st223{fill:#D3E0E2;}
	.st224{fill:#D3EFF4;}
	.st225{fill:#063B66;}
	.st226{fill:#D60909;}
	.st227{fill:#D61D1D;}
	.st228{fill:#D7F0FF;}
	.st229{fill:#09B285;}
	.st230{fill:#D8D593;}
	.st231{fill:#D8E2EA;}
	.st232{fill:#D8E5EA;}
	.st233{fill:#3E5054;}
	.st234{fill:#D988FF;}
	.st235{fill:#D9E7E8;}
	.st236{fill:#702252;}
	.st237{fill:#70D3E0;}
	.st238{fill:#A02FF2;}
	.st239{fill:#A2F255;}
	.st240{fill:#A35616;}
	.st241{fill:#A3CCCC;}
	.st242{fill:#0A6ADD;}
	.st243{fill:#A5145D;}
	.st244{fill:#A57555;}
	.st245{fill:#77D6FC;}
	.st246{fill:#7815CE;}
	.st247{fill:#A7BBC1;}
	.st248{fill:#DBD279;}
	.st249{fill:#0D5C9E;}
	.st250{fill:#A83C11;}
	.st251{fill:#A8633D;}
	.st252{fill:#A8A3E5;}
	.st253{fill:#DCE6EA;}
	.st254{fill:#DCE7EA;}
	.st255{fill:#A962E8;}
	.st256{fill:#DD2466;}
	.st257{fill:#DDC38A;}
	.st258{fill:#DDD2B1;}
	.st259{fill:#DFE7E8;}
	.st260{fill:#42B1E8;}
	.st261{fill:#436377;}
	.st262{fill:#43B530;}
]]>
</style>
<g>
	<g>
		<circle class="st141" cx="67.5" cy="67.499" r="61.667"/>
	</g>
	<g>
		<ellipse class="st226" cx="67.5" cy="67.499" rx="61.667" ry="47.232"/>
	</g>
	<g>
		<path class="st188" d="M5.833,67.499c0,34.061,27.609,61.668,61.667,61.668s61.667-27.607,61.667-61.668H5.833z"/>
	</g>
	<g>
		<path class="st232" d="M67.5,114.731c34.058,0,61.667-21.148,61.667-47.232H5.833C5.833,93.583,33.442,114.731,67.5,114.731z"/>
	</g>
	<g>
		<path class="st205" d="M67.5,130.667c-34.831,0-63.167-28.337-63.167-63.168c0-34.83,28.336-63.166,63.167-63.166
			s63.167,28.336,63.167,63.166C130.667,102.33,102.331,130.667,67.5,130.667z M67.5,7.333c-33.176,0-60.167,26.99-60.167,60.166
			c0,33.177,26.991,60.168,60.167,60.168s60.167-26.991,60.167-60.168C127.667,34.323,100.676,7.333,67.5,7.333z"/>
	</g>
	<g>
		<path class="st205" d="M129.167,68.999H5.833c-0.829,0-1.5-0.671-1.5-1.5s0.671-1.5,1.5-1.5h123.334c0.829,0,1.5,0.671,1.5,1.5
			S129.996,68.999,129.167,68.999z"/>
	</g>
	<g>
		<g>
			<circle class="st247" cx="67.5" cy="73.201" r="16.764"/>
		</g>
		<g>
			<circle class="st188" cx="67.5" cy="67.5" r="16.764"/>
		</g>
		<g>
			<path class="st232" d="M55.646,79.354c-6.547-6.547-6.546-17.16,0-23.709c6.547-6.546,17.161-6.546,23.707,0"/>
		</g>
		<g>
			<path class="st205" d="M67.5,85.765c-4.878,0-9.465-1.9-12.915-5.35c-7.12-7.12-7.12-18.707,0-25.83
				c3.45-3.449,8.037-5.349,12.915-5.349c4.878,0,9.464,1.899,12.914,5.349c3.45,3.451,5.351,8.038,5.351,12.916
				c0,4.878-1.9,9.464-5.351,12.914C76.965,83.865,72.379,85.765,67.5,85.765z M67.5,52.236c-4.077,0-7.91,1.587-10.793,4.47
				c-5.95,5.953-5.95,15.637,0,21.588c2.883,2.883,6.716,4.471,10.793,4.471c4.077,0,7.91-1.588,10.792-4.471
				c2.883-2.883,4.472-6.716,4.472-10.793c0-4.077-1.588-7.911-4.472-10.795C75.41,53.824,71.578,52.236,67.5,52.236z"/>
		</g>
	</g>
	<g>
		<g>
			<path class="st188" d="M73.204,73.203c-3.149,3.146-8.257,3.146-11.404,0c-3.149-3.15-3.148-8.255,0-11.403
				c3.148-3.15,8.255-3.148,11.403,0S76.352,70.053,73.204,73.203z"/>
		</g>
		<g>
			<path class="st232" d="M61.8,61.8c3.148-3.15,8.255-3.148,11.403,0s3.148,8.253,0.001,11.403"/>
		</g>
		<g>
			<path class="st205" d="M67.501,77.062c-2.555,0-4.957-0.994-6.762-2.798c-3.729-3.73-3.729-9.797,0-13.525
				c1.805-1.807,4.207-2.802,6.761-2.802s4.957,0.995,6.763,2.802c3.728,3.727,3.728,9.794,0.001,13.524
				C72.458,76.069,70.056,77.062,67.501,77.062z M67.5,60.938c-1.753,0-3.401,0.683-4.64,1.923c-2.559,2.559-2.559,6.723,0,9.282
				c1.238,1.238,2.887,1.919,4.641,1.919s3.403-0.682,4.643-1.92c2.557-2.559,2.557-6.723-0.001-9.281
				C70.902,61.621,69.254,60.938,67.5,60.938z"/>
		</g>
	</g>
</g>
</svg>
  );
};

export default PokemonIcon;
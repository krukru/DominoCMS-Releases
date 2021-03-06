﻿DominoViews.registerView( 'Domino.ContentBlocks', function( data ) {	"use strict";	return <div>		{ (function () {			if ( data ) {				var ret = [];				for (var i = 0; i < data.length; i++) {					var block = data[i];					if ( block.type )						ret.push(<component view={ 'Domino.ContentBlocks.Types.' + block.type } componentData={ block } />);					else if ( block.component ) {						var retContent = [];						if ( block.name )							retContent.push(<h2>{ block.name }</h2>);						if ( block.subtitle )							retContent.push(<h3>{ block.subtitle }</h3>);						if ( block.content )							retContent.push( DCUtil.displayHtml( block.content ) );						retContent.push( <component view={ block.component } componentData={ block.componentData }/> );						var retContainer = [];						if ( block.container || block.containerCol ) {							var container = block.container ? block.container : 'grid-container grid-x grid-padding-x';							var containerCell = block.containerCol ? block.containerCol : 'small-12 cell';							retContainer.push(<div class={ container }>								<div class={ containerCell }>									{ retContent }								</div>							</div>);						}						else							var retContainer = retContent;						if ( block.theme || block.class ) {							var cls = block.class ? block.class : '';							var theme = block.theme ? 'domino-contentblocks ' + block.theme : '';							ret.push(<div class={ theme + ' ' + cls }>{ retContainer }</div>);						}						else							ret.push( retContainer );					}				}				return ret;			}		})() }	</div>;});
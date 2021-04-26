/*
--------------
Kullanımı
--------------

1-Discord a web den girin.
2-f12 ye basıp console ekranına gelin.
3-bu kodu yapıştırın
4-çalıştıra veya Enter e basın
5-çıkan popup ta Benzersiz id'ni al a tıklayın
6-Mesajları silinecek kişi id si  butonunu tıklayın
7-kanal id si butonuna tıklayın
8-başlata tıklayın.

! özel mesajlarda (dm) de çalışır server kanallarında hatalı çalışır.


*/


(function () {
    let stop;
    let popup;
    popup = window.open('', '', `top=0,left=${screen.width-800},width=800,height=${screen.height}`);
    if (!popup) return console.error('Lanet olsun adamım açılır pencereyi engellemişsin tarayıcı ayarlarını düzenle !');
    popup.document.write(/*html*/`
    <!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="style.css">
    <style>
    
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input,button{
    border-top-style: hidden;
    border-right-style: hidden;
    border-left-style: hidden;
    border-bottom-style: hidden;
    
}
body{
    background-color:#2F3136;
    color:#dcddde;
    font-family:sans-serif;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    } 
    .toolbar h1{
        font-size: 45px;
        text-align:center;
    }   
    #prime{
        display: flex;
        flex-direction:row;
        margin-left: 50px;

    }
    #prime button{
    width: auto;
    height: 40px;
    border-radius: 5px;
    background-color: #2F3136; 
    color:rgb(255, 255, 255);
    font-weight: 500;
    transition: 500ms all;
    }
    #prime button:hover{
        background: #272b30;
        color:rgb(214, 214, 199);
    }
    #prime input{
        width: auto;
        height: 25px;
        margin-left: 30px;
        margin-right: 30px;
        padding-bottom: 12px;
        color:#fff;
        background:#677BC4;
        font-size:14px;
        align-items: center;
        justify-content: center;
        text-align: center; 
        transition: 500ms all;
        border-radius: 3px;
    }
    #prime input:focus{
        background:rgba(114, 137, 218, .5);
    }
    #prime .box{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        align-content: center;
        border-radius:20px;
        background: #18191C;
        width: auto;
        height: auto;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        margin-top: 30px;
        -webkit-box-shadow: 0px 10px 13px -7px #000000, -3px 13px 44px 3px rgba(0,0,0,0); 
        box-shadow: 0px 10px 13px -7px #000000, -3px 13px 44px 3px rgba(0,0,0,0);
    }

    #prime input,button{
        margin: 13px;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    #prime a,span{
        font-size: 20px;
        color: #677BC4;
    }
    @keyframes fadeIn {
        0% {opacity: 0;}
        100% {opacity: 1;}
    }

    .title{
        margin-top: 50px;
    }

    /** Checkboxes **/
    

    #filter{
        display: flex !important;
        flex-direction: column !important;
        flex-wrap: nowrap !important;
        justify-content: flex-start !important;
        align-items: flex-start !important;
        align-content: flex-start  !important;
        margin-bottom: 50px;
    }

    #button{
        display: flex;
        flex-direction:column !important;
        justify-content: center !important;
        align-items: center !important;
        margin-left: 30px !important;
    }

    #button #start{
        color:#43b581;
        width:80px;
    }

    #button #stop{
        color:#F04747;
        width:80px;
    }
    #button #clear{
        color: #FAA61A;
        width: auto;
    }

    footer{
        margin-top:150px;
        font-size:0.75rem;
        font-family: 'Open Sans', sans-serif;
    }
    footer a{
        color: aqua;
    }
    </style>
</head>
<body>
    <div class="toolbar">
        <div class="title">
            <h1>Discord Mesaj silme</h1>
        </div>
        <div id="prime">
            <span>Kişisel id'n
            <a href="https://github.com/Akiftsc/DiscordMesajsil/wiki/Benzersiz-id'n-(Token)-nedir-%3F" title="Yardım">
                ?
            </a>
            <div class="box">
            <button id="getToken">Benzersiz id'n al.</button>
                <input type="password" id="authToken" placeholder="Kişisel id'in" autofocus>
            </span>
            </div>
            <div class="title">
                <span>Mesajları silinecek kişi <a href="https://github.com/Akiftsc/DiscordMesajsil/wiki/Ki%C5%9Fi-id'si-nedir-%3F" title="Yardım">?</a></span>
            </div>
                <div class="box">
                <button id="getAuthor">Mesajları silinecek kişinin id'si</button>
                    <br>
                <input id="authorId" type="text" placeholder="Yazar id" priv>
            </div>
            <div class="title">
            <span class="help">Kanal id'si <a href="https://github.com/Akiftsc/DiscordMesajsil/wiki/Kanal-id'si-nedir-%3F" title="Yardım">?</a>
            </div>
                <div class="box">
                    <button id="getGuildAndChannel">Kanal id'ni al.</button><br>
                    <input id="guildId" type="text" placeholder="kimden" priv><br>
                    <input id="channelId" type="text" placeholder="kime" priv></span><br>
                </span>
                </div>
                <div class="title">
                    <span>İlk ve son mesaj<br>
                </div>
                <div class="box">
                    <input id="afterMessageId" type="text" placeholder="İlk mesaj id'si" priv><br>
                    <input id="beforeMessageId" type="text" placeholder="Son mesaj id'si" priv>
                </span>
            </div>
            <div class="title">
                <span>Filtre <a href="https://github.com/Akiftsc/DiscordMesajsil/wiki/Filtre" title="Yardım">?</a><br>
            </div>
            <div class="box" id="filter">
                <input id="content" type="text" placeholder="Filtre" priv><br>
                    <label><input id="hasLink" type="checkbox" class="checkbox">Sadece link</label><br>
                    <label><input id="hasFile" type="checkbox" class="checkbox">Sadece Dosya</label><br>
                    <label><input id="includeNsfw" type="checkbox">Güvenli olmayan içeriği dahil et.</label>
            </span>
            </div>
            <center>
            <span id="kontrol" > Kontrol paneli
                <div class="box" id="button">
                    <button id="start">Başlat</button>
                    <button id="stop" disabled>Durdur</button>
                    <button id="clear"">Konsolu Temizle</button>
                    <label><input id="redact" type="checkbox"><small>Hassas bilgileri gizle</small></label> <span></span>
                    <label><input id="autoScroll" type="checkbox" checked><small>Oto.Kaydır</small></label> <span></span>
                </div>
            </span>
            </center>
        </div>
    </div>
    </div>
    </div>
    <footer>
        <pre>
        Kod Yazan : <a href="https://twitter.com/mathheadphones">Mehmet Akif Taşçı</a>
        Tasarlayan : <a href="https://discord.gg/6Af2NDYjFp">Tarık Karaca</a>
        <a href="https://discord.gg/6Af2NDYjFp" style="color:blueviolet;">Discord</a>
        2021
        </pre>
    </footer>
</body>
</html>
    `);

    const logArea = popup.document.querySelector('pre');
    const startBtn = popup.document.querySelector('button#start');
    const stopBtn = popup.document.querySelector('button#stop');
    const autoScroll = popup.document.querySelector('#autoScroll');
    startBtn.onclick = e => {
        const authToken = popup.document.querySelector('input#authToken').value.trim();
        const authorId = popup.document.querySelector('input#authorId').value.trim();
        const guildId = popup.document.querySelector('input#guildId').value.trim();
        const channelId = popup.document.querySelector('input#channelId').value.trim();
        const afterMessageId = popup.document.querySelector('input#afterMessageId').value.trim();
        const beforeMessageId = popup.document.querySelector('input#beforeMessageId').value.trim();
        const content = popup.document.querySelector('input#content').value.trim();
        const hasLink = popup.document.querySelector('input#hasLink').checked;
        const hasFile = popup.document.querySelector('input#hasFile').checked;
        const includeNsfw = popup.document.querySelector('input#includeNsfw').checked;
        stop = stopBtn.disabled = !(startBtn.disabled = true);
        deleteMessages(authToken, authorId, guildId, channelId, afterMessageId, beforeMessageId, content, hasLink, hasFile, includeNsfw, logger, () => !(stop === true || popup.closed)).then(() => {
            stop = stopBtn.disabled = !(startBtn.disabled = false);
        });
    };
    stopBtn.onclick = e => stop = stopBtn.disabled = !(startBtn.disabled = false);
    popup.document.querySelector('button#clear').onclick = e => { logArea.innerHTML = ''; };
    popup.document.querySelector('button#getToken').onclick = e => {
        window.dispatchEvent(new Event('beforeunload'));
        popup.document.querySelector('input#authToken').value = JSON.parse(popup.localStorage.token);
    };
    popup.document.querySelector('button#getAuthor').onclick = e => {
        popup.document.querySelector('input#authorId').value = JSON.parse(popup.localStorage.user_id_cache);
    };
    popup.document.querySelector('button#getGuildAndChannel').onclick = e => {
        const m = location.href.match(/channels\/([\w@]+)\/(\d+)/);
        popup.document.querySelector('input#guildId').value = m[1];
        popup.document.querySelector('input#channelId').value = m[2];
    };
    popup.document.querySelector('#redact').onchange = e => {
        popup.document.body.classList.toggle('redact') &&
        popup.alert('This will attempt to hide personal information, but make sure to double check before sharing screenshots.');
    };

    const logger = (type='', args) => {
        const style = { '': '', info: 'color:#00b0f4;', verb: 'color:#72767d;', warn: 'color:#faa61a;', error: 'color:#f04747;', success: 'color:#43b581;' }[type];
        logArea.insertAdjacentHTML('beforeend', `<div style="${style}">${Array.from(args).map(o => typeof o === 'object' ?  JSON.stringify(o, o instanceof Error && Object.getOwnPropertyNames(o)) : o).join('\t')}</div>`);
        if (autoScroll.checked) logArea.querySelector('div:last-child').scrollIntoView(false);
    };

    return 'Gayet iyi gözüküyor.';
    async function deleteMessages(authToken, authorId, guildId, channelId, afterMessageId, beforeMessageId, content,hasLink, hasFile, includeNsfw, extLogger, stopHndl) {
        const start = new Date();
        let deleteDelay = 100;
        let searchDelay = 100;
        let delCount = 0;
        let failCount = 0;
        let avgPing;
        let lastPing;
        let grandTotal;
        let throttledCount = 0;
        let throttledTotalTime = 0;
        let offset = 0;
        let iterations = -1;
       
        const wait = async ms => new Promise(done => setTimeout(done, ms));
        const msToHMS = s => `${s / 3.6e6 | 0}h ${(s % 3.6e6) / 6e4 | 0}m ${(s % 6e4) / 1000 | 0}s`;
        const escapeHTML = html => html.replace(/[&<"']/g, m => ({ '&': '&amp;', '<': '&lt;', '"': '&quot;', '\'': '&#039;' })[m]);
        const redact = str => `<span class="priv">${escapeHTML(str)}</span><span class="mask">REDACTED</span>`;
        const queryString = params => params.filter(p => p[1] !== undefined).map(p => p[0] + '=' + encodeURIComponent(p[1])).join('&');
        const ask = async msg => new Promise(resolve => setTimeout(() => resolve(popup.confirm(msg)), 10));
        const printDelayStats = () => log.verb(`Silme süresi: ${deleteDelay}ms, arama süresi: ${searchDelay}ms`, `son ping: ${lastPing}ms, genel ping: ${avgPing|0}ms`);

        const log = {
            debug() { extLogger ? extLogger('debug', arguments) : console.debug.apply(console, arguments); },
            info() { extLogger ? extLogger('info', arguments) : console.info.apply(console, arguments); },
            verb() { extLogger ? extLogger('verb', arguments) : console.log.apply(console, arguments); },
            warn() { extLogger ? extLogger('warn', arguments) : console.warn.apply(console, arguments); },
            error() { extLogger ? extLogger('error', arguments) : console.error.apply(console, arguments); },
            success() { extLogger ? extLogger('success', arguments) : console.info.apply(console, arguments); },
        };

        async function recurse() {
            iterations++;

            let API_SEARCH_URL;
            if (guildId === '@me') {
                API_SEARCH_URL = `https://discordapp.com/api/v6/channels/${channelId}/messages/`; // DMs
            }
            else {
                API_SEARCH_URL = `https://discordapp.com/api/v6/guilds/${guildId}/messages/`; // Server
            }

            const headers = {
                'Authorization': authToken
            };
            
            let resp;
            try {
                const s = Date.now();
                resp = await fetch(API_SEARCH_URL + 'search?' + queryString([
                    [ 'author_id', authorId || undefined ],
                    [ 'channel_id', (guildId !== '@me' ? channelId : undefined) || undefined ],
                    [ 'min_id', afterMessageId || undefined ],
                    [ 'max_id', beforeMessageId || undefined ],
                    [ 'sort_by', 'timestamp' ],
                    [ 'sort_order', 'desc' ],
                    [ 'offset', offset ],
                    [ 'has', hasLink ? 'link' : undefined ],
                    [ 'has', hasFile ? 'file' : undefined ],
                    [ 'content', content || undefined ],
                    [ 'include_nsfw', includeNsfw ? true : undefined ],
                ]), { headers });
                lastPing = (Date.now() - s);
                avgPing = avgPing>0 ? (avgPing*0.9) + (lastPing*0.1):lastPing;
            } catch (err) {
                return log.error('Arama hatası alındı:', err);
            }
    
            // not indexed yet
            if (resp.status === 202) {
                const w = (await resp.json()).retry_after;
                throttledCount++;
                throttledTotalTime += w;
                log.warn(`Kanal indexlenmedi, bekleniyor ${w} Discordun indexlemesi bekleniyor...`);
                await wait(w);
                return await recurse();
            }
    
            if (!resp.ok) {
                // searching messages too fast
                if (resp.status === 429) {
                    const w = (await resp.json()).retry_after;
                    throttledCount++;
                    throttledTotalTime += w;
                    searchDelay += w; // increase delay
                    log.warn(`İçin API tarafından sınırlanan oran ${w}ping! Arama gecikmesi artırılıyor ..`);
                    printDelayStats();
                    log.verb(` ${w * 2}ms sonra deneniyor`);
                    
                    await wait(w*2);
                    return await recurse();
                } else {
                    return log.error(`Aranan mesajda hata ${resp.status}!\n`, await resp.json());
                }
            }
    
            const data = await resp.json();
            const total = data.total_results;
            if (!grandTotal) grandTotal = total;
            const myMessages = data.messages.map(convo => convo.find(message => message.hit===true));
            const systemMessages = myMessages.filter(msg => msg.type !== 0); // https://discordapp.com/developers/docs/resources/channel#message-object-message-types
            const deletableMessages = myMessages.filter(msg => msg.type === 0);
            const end = () => {
                log.success(`Şu tarihte bitti ${new Date().toLocaleString()}! Toplam: ${msToHMS(Date.now() - start.getTime())}`);
                printDelayStats();
                log.verb(`Oran Sınırlı : ${throttledCount} kere. Toplam kısılmış: ${msToHMS(throttledTotalTime)}.`);
                log.debug(`${delCount} Mesaj silindi, ${failCount} Hata alındı\n`);
            }

            const etr = msToHMS((searchDelay * Math.round(total / 25)) + ((deleteDelay + avgPing) * total));
            log.info(`adet mesaj bulundu: ${data.total_results}`, `(Şuanki sayfada bulunan mesaj: ${data.messages.length}, Mesajları silinecek kişi: ${deletableMessages.length}, Sistem: ${systemMessages.length})`, `ofset: ${offset}`);
            printDelayStats();
            log.verb(`Kalan tahmini süre:  ${etr}`)
            
            
            if (myMessages.length > 0) {

                if (iterations < 1) {
                    log.verb(`Onayınız bekleniyor`);
                    if (!await ask(`${total} Adet mesaj silmek istermisiniz ?\nTahmini hepsinin silme zamanı: ${etr}\n\n---- Önizleme ----\n` +
                        myMessages.map(m => `${m.author.username}#${m.author.discriminator}: ${m.attachments.length ? '[ATTACHMENTS]' : m.content}`).join('\n')))
                            return end(log.error('iptal ettin !'));
                    log.verb(`OK`);
                }
                
                for (let i = 0; i < deletableMessages.length; i++) {
                    const message = deletableMessages[i];
                    if (stopHndl && stopHndl()===false) return end(log.error('Durdurdun'));

                    log.debug(`${((delCount + 1) / grandTotal * 100).toFixed(2)}% (${delCount + 1}/${grandTotal})`,
                        `silinen mesaj id:${redact(message.id)} <b>${redact(message.author.username+'#'+message.author.discriminator)} <small>(${redact(new Date(message.timestamp).toLocaleString())})</small>:</b> <i>${redact(message.content).replace(/\n/g,'?')}</i>`,
                        message.attachments.length ? redact(JSON.stringify(message.attachments)) : '');
                    
                    let resp;
                    try {
                        const s = Date.now();
                        const API_DELETE_URL = `https://discordapp.com/api/v6/channels/${channelId}/messages/`;
                        resp = await fetch(API_DELETE_URL + message.id, {
                            headers,
                            method: 'DELETE'
                        });
                        lastPing = (Date.now() - s);
                        avgPing = (avgPing*0.9) + (lastPing*0.1);
                        delCount++;
                    } catch (err) {
                        log.error('Silme isteği bir hataya neden oldu :', err);
                        log.verb('İlişkili:', redact(JSON.stringify(message)));
                        failCount++;
                    }

                    if (!resp.ok) {
                        // deleting messages too fast
                        if (resp.status === 429) {
                            const w = (await resp.json()).retry_after;
                            throttledCount++;
                            throttledTotalTime += w;
                            deleteDelay += w; // increase delay
                            printDelayStats();
                            await wait(w*2);
                            i--; // retry
                        } else {
                            log.error(`Mesaj silme hatası ${resp.status}!`, await resp.json());
                            log.verb('Hedef obje:', redact(JSON.stringify(message)));
                            failCount++;
                        }
                    }
                    
                    await wait(deleteDelay);
                }

                if (systemMessages.length > 0) {
                    grandTotal -= systemMessages.length;
                    offset += systemMessages.length;
                    log.verb(`Found ${systemMessages.length} Sistem mesajı! Genel Toplam şu değere düşürülüyor:  ${grandTotal} ve ofseti artırarak  ${offset}.`);
                }
                
                log.verb(`Yeni mesajlar ${searchDelay} ping ile`, (offset ? `(ofset: ${offset})` : '') );
                await wait(searchDelay);

                if (stopHndl && stopHndl()===false) return end(log.error('Durdurdun !'));

                return await recurse();
            } else {
                if (total - offset > 0) log.warn('API boş bir sayfa döndürdüğü için sona erdi. ');
                return end();
            }
        }

        log.success(`\n ${start.toLocaleString()} da başladı`);
        log.debug(`authorId="${redact(authorId)}" Kanal id="${redact(guildId)}" Kanal 1 id="${redact(channelId)}" Sonraki mesaj id="${redact(afterMessageId)}" Önceki mesaj id="${redact(beforeMessageId)}" Sadece link=${!!hasLink} Sadece dosya=${!!hasFile}`);
        return await recurse();
    }
})();

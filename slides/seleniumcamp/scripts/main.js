bespoke.from('article', {
  keys: true,
  touch: true,
  // bullets: 'li, .bullet',
  scale: true,
  hash: true,
  progress: true,
  state: true
});

Prism.languages.php = {
	'comment': {
		pattern: /(^|[^\\])(\/\*[\w\W]*?\*\/|\/\/.*?(\r?\n|$))/g,
		lookbehind: true
	},
	'deliminator': /(\?>|\?&gt;|&lt;\?php|<\?php)/ig,
	'variable': /(\$\w+)\b/ig,
	'string': /("|')(\\?.)*?\1/g,
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
		lookbehind: true
	},
	'keyword': /\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|extends|private|protected|throw)\b/g,
	'function': /\b(abs|acos|acosh|addcslashes|addslashes|array_change_key_case|array_chunk|array_combine|array_count_values|array_diff|array_diff_assoc|array_diff_key|array_diff_uassoc|array_diff_ukey|array_fill|array_filter|array_flip|array_intersect|array_intersect_assoc|array_intersect_key|array_intersect_uassoc|array_intersect_ukey|array_key_exists|array_keys|array_map|array_merge|array_merge_recursive|array_multisort|array_pad|array_pop|array_product|array_push|array_rand|array_reduce|array_reverse|array_search|array_shift|array_slice|array_splice|array_sum|array_udiff|array_udiff_assoc|array_udiff_uassoc|array_uintersect|array_uintersect_assoc|array_uintersect_uassoc|array_unique|array_unshift|array_values|array_walk|array_walk_recursive|atan|atan2|atanh|base64_decode|base64_encode|base_convert|basename|bcadd|bccomp|bcdiv|bcmod|bcmul|bindec|bindtextdomain|bzclose|bzcompress|bzdecompress|bzerrno|bzerror|bzerrstr|bzflush|bzopen|bzread|bzwrite|ceil|chdir|checkdate|checkdnsrr|chgrp|chmod|chop|chown|chr|chroot|chunk_split|class_exists|closedir|closelog|copy|cos|cosh|count|count_chars|date|decbin|dechex|decoct|deg2rad|delete|ebcdic2ascii|echo|empty|end|ereg|ereg_replace|eregi|eregi_replace|error_log|error_reporting|escapeshellarg|escapeshellcmd|eval|exec|exit|exp|explode|extension_loaded|feof|fflush|fgetc|fgetcsv|fgets|fgetss|file_exists|file_get_contents|file_put_contents|fileatime|filectime|filegroup|fileinode|filemtime|fileowner|fileperms|filesize|filetype|floatval|flock|floor|flush|fmod|fnmatch|fopen|fpassthru|fprintf|fputcsv|fputs|fread|fscanf|fseek|fsockopen|fstat|ftell|ftok|getallheaders|getcwd|getdate|getenv|gethostbyaddr|gethostbyname|gethostbynamel|getimagesize|getlastmod|getmxrr|getmygid|getmyinode|getmypid|getmyuid|getopt|getprotobyname|getprotobynumber|getrandmax|getrusage|getservbyname|getservbyport|gettext|gettimeofday|gettype|glob|gmdate|gmmktime|ini_alter|ini_get|ini_get_all|ini_restore|ini_set|interface_exists|intval|ip2long|is_a|is_array|is_bool|is_callable|is_dir|is_double|is_executable|is_file|is_finite|is_float|is_infinite|is_int|is_integer|is_link|is_long|is_nan|is_null|is_numeric|is_object|is_readable|is_real|is_resource|is_scalar|is_soap_fault|is_string|is_subclass_of|is_uploaded_file|is_writable|is_writeable|mkdir|mktime|nl2br|parse_ini_file|parse_str|parse_url|passthru|pathinfo|readlink|realpath|rewind|rewinddir|rmdir|round|str_ireplace|str_pad|str_repeat|str_replace|str_rot13|str_shuffle|str_split|str_word_count|strcasecmp|strchr|strcmp|strcoll|strcspn|strftime|strip_tags|stripcslashes|stripos|stripslashes|stristr|strlen|strnatcasecmp|strnatcmp|strncasecmp|strncmp|strpbrk|strpos|strptime|strrchr|strrev|strripos|strrpos|strspn|strstr|strtok|strtolower|strtotime|strtoupper|strtr|strval|substr|substr_compare)\b/g,
	'constant': /\b(__FILE__|__LINE__|__METHOD__|__FUNCTION__|__CLASS__)\b/g,
	'boolean': /\b(true|false)\b/g,
	'number': /\b-?(0x)?\d*\.?\d+\b/g,
	'operator': /[-+]{1,2}|!|=?\<|=?\>;|={1,2}(?!>)|(\&){1,2}|\|?\||\?|\*|\//g,
	'punctuation': /[{}[\];(),.:]/g
};

Prism.languages.ruby = {
	'comment': /#[^\r\n]*(\r?\n|$)/g,
	'string': /("|')(\\?.)*?\1/g,
	'regex': {
		pattern: /(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,
		lookbehind: true
	},
	'keyword': /\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/g,
  'builtin': /\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,
	'boolean': /\b(true|false)\b/g,
	'number': /\b-?(0x)?\d*\.?\d+\b/g,
	'operator': /[-+]{1,2}|!|=?&lt;|=?&gt;|={1,2}|(&amp;){1,2}|\|?\||\?|\*|\//g,
  'inst-var': /[@&]\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
  'symbol': /:\b[a-zA-Z_][a-zA-Z_0-9]*[?!]?\b/g,
  'const': /\b[A-Z][a-zA-Z_0-9]*[?!]?\b/g,
	'ignore': /&(lt|gt|amp);/gi,
	'punctuation': /[{}[\];(),.:]/g
};